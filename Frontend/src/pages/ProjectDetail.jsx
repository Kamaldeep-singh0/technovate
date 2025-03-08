import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Github, Star, MessageCircle, Heart, User, X, ExternalLink } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects/${id}`);
        if (!response.ok) {
          throw new Error('Project not found');
        }
        const data = await response.json();
        setProject(data);
        if (data.comments) {
          setComments(data.comments);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id, API_BASE_URL]);

  const handleRatingSubmit = async () => {
    if (!userRating) return;
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects/${id}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: userRating })
      });
      
      if (response.ok) {
        const updatedProject = await response.json();
        setProject(updatedProject);
      }
    } catch (err) {
      console.error('Error submitting rating:', err);
      // Add error feedback here
    }
  };

  const handleRatingClick = (value) => {
    setUserRating(value);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.author.trim() && newComment.text.trim()) {
      const currentDate = new Date().toISOString().split('T')[0];
      setComments(prev => [
        {
          id: prev.length + 1,
          ...newComment,
          date: currentDate
        },
        ...prev
      ]);
      setNewComment({ author: '', text: '' });
      setIsCommentDialogOpen(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Project</h2>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  if (!project) return null;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-8">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Project Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <User size={40} className="text-gray-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <div className="flex gap-2">
                {project.tags?.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800/50 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-8 rounded-xl overflow-hidden border border-white/10">
            <img 
              src={project?.media[0]?.url || "/api/placeholder/800/400"} 
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Action Buttons - Moved under the image */}
          <div className="flex flex-wrap gap-4 mb-8">
          <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                liked ? 'bg-red-500 text-white' : 'bg-white/10 text-white'
              } hover:shadow-lg`}
            >
              <Heart size={20} fill={liked ? "currentColor" : "none"} />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
            {project?.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow-lg"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            )}
            {project?.liveLink && (
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            )}
           
          </div>

          {/* Tech Stack */}
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-xl p-6 mb-8 border border-white/10">
            <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-800/50 rounded-full text-sm font-medium border border-white/5 hover:border-white/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <div className="space-y-4 text-gray-300">
              <p>{project.description}</p>
            </div>
          </div>

          {/* Rating Section - Added submit button */}
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Rating</h2>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" fill="currentColor" size={24} />
                <span className="text-yellow-500 font-bold text-2xl">
                  {project.rating?.average?.toFixed(1) || '0.0'}
                </span>
                <span className="text-gray-400">/ 5.0</span>
                <span className="text-gray-400">
                  ({project.rating?.votes?.length || 0} votes)
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 mr-2">Rate this project:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  className={`text-2xl ${
                    userRating >= star ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                >
                  <Star
                    size={28}
                    fill={userRating >= star ? "currentColor" : "none"}
                  />
                </button>
              ))}
            </div>
            {userRating > 0 && (
              <button
                onClick={handleRatingSubmit}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
              >
                Submit Rating
              </button>
            )}
          </div>

          <div className="mb-12">
<div className="flex justify-between items-center mb-6">
  <h2 className="text-2xl font-bold">Comments</h2>
  <button 
    onClick={() => setIsCommentDialogOpen(true)}
    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
  >
    Add Comment
  </button>
</div>
<div className="space-y-6">
  {comments.map(comment => (
    <div key={comment.id} className="bg-gray-900/40 backdrop-blur-lg p-6 rounded-xl border border-white/10">
      <div className="flex justify-between mb-2">
        <h3 className="font-bold">{comment.author}</h3>
        <span className="text-gray-400 text-sm">{comment.date}</span>
      </div>
      <p className="text-gray-300">{comment.text}</p>
    </div>
  ))}
</div>
</div>
{/* Comment Dialog */}
{isCommentDialogOpen && (
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
  <div className="bg-gray-900/80 backdrop-blur-lg rounded-xl p-6 w-full max-w-md relative border border-white/10">
    <button 
      onClick={() => setIsCommentDialogOpen(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
    >
      <X size={24} />
    </button>
    <h2 className="text-xl font-bold mb-4">Add a Comment</h2>
    <form onSubmit={handleAddComment} className="space-y-4">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-400 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="author"
          value={newComment.author}
          onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
          className="w-full px-3 py-2 bg-black/50 rounded-lg text-white border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-400 mb-1">
          Your Comment
        </label>
        <textarea
          id="comment"
          value={newComment.text}
          onChange={(e) => setNewComment(prev => ({ ...prev, text: e.target.value }))}
          className="w-full px-3 py-2 bg-black/50 rounded-lg text-white border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32 resize-none"
          required
        />
      </div>
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => setIsCommentDialogOpen(false)}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Post Comment
        </button>
      </div>
    </form>
  </div>
</div>
)}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;













