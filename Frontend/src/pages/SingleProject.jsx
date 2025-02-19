import React, { useState } from 'react';
import { Github, Star, MessageCircle, ExternalLink, Heart, User, X } from 'lucide-react';

const SingleProject = () => {
  const [liked, setLiked] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const projectRating = 4.8;
  const [comments, setComments] = useState([
    { id: 1, author: "Sarah Chen", text: "Fantastic project! The documentation is crystal clear.", date: "2024-03-15" },
    { id: 2, author: "Mike Johnson", text: "Really impressed with the performance optimizations.", date: "2024-03-14" },
    { id: 3, author: "Alex Rivera", text: "Great work! Looking forward to future updates.", date: "2024-03-13" }
  ]);

  const handleRatingClick = (rating) => {
    setUserRating(rating);
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 pt-8">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Profile Section */}
          <div className="flex items-center gap-6 mb-12">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-white/10">
              <img 
                src="https://unsplash.com/photos/person-writing-on-white-paper-Ax8IA8GAjVg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '';
                  e.currentTarget.parentElement.innerHTML = '<User size={40} className="text-gray-400" />';
                }}
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Project Showcase
              </h1>
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" fill="currentColor" size={20} />
                <span className="text-yellow-500 font-bold">{projectRating}</span>
                <span className="text-gray-400">/ 5.0</span>
              </div>
            </div>
          </div>

          {/* Project Image */}
          <div className="mb-8 rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://unsplash.com/photos/person-writing-on-white-paper-Ax8IA8GAjVg"
              alt="Project Screenshot"
              className="w-full"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mb-12">
            <button 
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                liked ? 'bg-red-500 text-white' : 'bg-white text-black'
              } hover:shadow-lg`}
            >
              <Heart size={20} fill={liked ? "currentColor" : "none"} />
              <span>{liked ? 'Liked' : 'Like'}</span>
            </button>
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow-lg">
              <Github size={20} />
              <span>View on GitHub</span>
            </button>
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow-lg">
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </button>
          </div>

          {/* Project Description */}
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-xl p-8 mb-12 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                This innovative web application showcases the perfect blend of modern technology and user-centric design. Built with React and TypeScript, it demonstrates best practices in front-end development while delivering a seamless user experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Responsive design for all devices</li>
                    <li>Real-time user interactions</li>
                    <li>Advanced state management</li>
                    <li>Performance optimized</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Tech Stack</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>React 18 with TypeScript</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Modern JavaScript features</li>
                    <li>Optimized build system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Comments Section */}
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

          {/* Rating Request Section */}
          <div className="bg-gray-900/40 backdrop-blur-lg p-8 rounded-xl mb-12 border border-white/10">
            <h2 className="text-2xl font-bold mb-4">Rate this Project</h2>
            <p className="text-gray-400 mb-4">How would you rate your experience with this project?</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleRatingClick(rating)}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    rating <= userRating ? 'text-yellow-500' : 'text-gray-600'
                  }`}
                >
                  <Star size={32} fill={rating <= userRating ? "currentColor" : "none"} />
                </button>
              ))}
            </div>
            {userRating > 0 && (
              <p className="mt-4 text-green-500">Thanks for rating this project!</p>
            )}
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

          {/* Message Button */}
          <div className="fixed bottom-8 right-8">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 hover:shadow-lg shadow-xl">
              <MessageCircle size={20} />
              <span>Message Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;