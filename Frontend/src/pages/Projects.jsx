import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Heart, MessageSquare, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative pt-24 pb-16 z-10">
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
          
          <Link to="/Single">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    className="bg-zinc-900/40 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 shadow-xl"
  >
    <img
      src="/api/placeholder/400/200"
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.author}</p>
        </div>
        <div className="flex space-x-2">
          <a href={project.github} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={project.demo} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 rounded-full text-sm border border-white/5 hover:border-white/10 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex justify-between text-gray-400">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 hover:text-pink-500 transition-colors cursor-pointer">
            <Heart className="w-4 h-4" />
            <span>{project.likes}</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-500 transition-colors cursor-pointer">
            <MessageSquare className="w-4 h-4" />
            <span>{project.comments}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-yellow-400">{project.rating}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const projects = [
  {
    title: "AI-Powered Task Manager",
    author: "Sarah Chen",
    description: "A smart task management app that uses AI to prioritize and organize tasks effectively.",
    image: "/api/placeholder/400/200",
    github: "#",
    demo: "#",
    tags: ["React", "TypeScript", "AI"],
    likes: 128,
    comments: 32,
    rating: 4.8
  },
  {
    title: "EcoTrack",
    author: "James Wilson",
    description: "Mobile app for tracking and reducing personal carbon footprint through daily activities.",
    image: "/api/placeholder/400/200",
    github: "#",
    demo: "#",
    tags: ["React Native", "Node.js", "MongoDB"],
    likes: 95,
    comments: 24,
    rating: 4.6
  },
  {
    title: "Virtual Study Rooms",
    author: "Emma Rodriguez",
    description: "A platform for students to create and join virtual study rooms with built-in productivity tools.",
    image: "/api/placeholder/400/200",
    github: "#",
    demo: "#",
    tags: ["Vue.js", "WebRTC", "Firebase"],
    likes: 156,
    comments: 45,
    rating: 4.9
  }
];

export default Projects;