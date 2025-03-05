import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, MessageSquare, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCardShimmer from '../components/ProjectCardShimmer';
import { WavyBackground } from '../components/ui/wavy-background';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Error Boundary Component remains unchanged
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <h2 className="text-red-500 font-semibold">Something went wrong</h2>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-4 py-2 bg-red-500/20 text-red-500 rounded-md hover:bg-red-500/30"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validateProject = (project) => {
      const requiredFields = ['_id', 'title', 'description'];
      return requiredFields.every(field => project.hasOwnProperty(field));
    };

    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/projects/`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch projects. Status: ${response.status}`);
        }

        const data = await response.json();
        
        // Ensure data is an array
        const projectsArray = Array.isArray(data) ? data : [data];
        
        
        const validProjects = projectsArray.filter(validateProject);
        
        if (validProjects.length === 0) {
          throw new Error("No valid projects found in the response");
        }

        setProjects(validProjects);
        setLoading(false);
      } catch (err) {
        console.error("Project fetch error:", err);
        setError(err.message || "Failed to fetch projects. Please try again later.");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return (
    <ProjectCardShimmer/>
  );

  if (error) return (
    <div className="h-screen bg-black flex items-center justify-center overflow-auto">
      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
        <div className="text-red-500 font-semibold">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-500/20 text-red-500 rounded-md hover:bg-red-500/30"
        >
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative h-screen bg-black">
      <div className="fixed inset-0 w-full">
        <WavyBackground className="h-full w-full" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative h-full overflow-auto"
      >
        <div className="relative pt-32 pb-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Featured Projects
              </h1>
              <Link to="/Add">
                <button className="px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition-all duration-200 font-medium shadow-lg">
                  Add Project
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ErrorBoundary key={project._id}>
                  <ProjectCard project={project} />
                </ErrorBoundary>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const authorName = project?.userId?.name || 'Anonymous';
  const likeCount = project?.likes?.count || 0;
  const commentCount = project?.comments?.length || 0;
  const averageRating = project?.rating?.average || 0;
  const techStack = project?.techStack || [];
  
  return (
    <Link to={`/project/${project._id}`} className="block">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zinc-900/40 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
      >
        <img
          src={project?.media[0]?.url || "/api/placeholder/400/200"}
          alt={project?.title || 'Project'}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project?.title || 'Untitled Project'}</h3>
              <p className="text-gray-400 text-sm">{authorName}</p>
            </div>
            <div className="flex space-x-2">
              {project?.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project?.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-300 mb-4 line-clamp-3">{project?.description || 'No description available'}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/5 hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between text-gray-400">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 hover:text-pink-500 transition-colors cursor-pointer">
                <Heart className="w-4 h-4" />
                <span>{likeCount}</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-blue-500 transition-colors cursor-pointer">
                <MessageSquare className="w-4 h-4" />
                <span>{commentCount}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-yellow-400">{averageRating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default Projects;