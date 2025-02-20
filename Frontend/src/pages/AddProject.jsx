import React, { useState } from 'react';
import { Github, Globe, Plus, X, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddProject = () => {
  const navigate = useNavigate();
  const [techStack, setTechStack] = useState([]);
  const [newTech, setNewTech] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    githubLink: '',
    liveLink: '',
    media: []
  });

  const addTech = () => {
    if (newTech.trim()) {
      setTechStack([...techStack, newTech.trim()]);
      setNewTech('');
    }
  };

  const removeTech = (techToRemove) => {
    setTechStack(techStack.filter(tech => tech !== techToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      title: formData.title,
      description: formData.description,
      techStack: techStack,
      githubLink: formData.githubLink,
      liveLink: formData.liveLink,
      media: [{
        type: 'image',
        url: formData.mediaUrl,
        title: formData.title,
        description: formData.description
      }]
    };
    const token = localStorage.getItem('token');
    console.log(token);
    try {
      const response = await fetch(`${API_BASE_URL}/api/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token
          // Add any authentication headers if required
        },
        body: JSON.stringify(projectData)
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const newProject = await response.json();
      setShowSuccess(true);
      
      // Short delay to show success message before redirecting
      setTimeout(() => {
        setShowSuccess(false);
        // Redirect to the new project page
        navigate(`/project/${newProject._id}`);
      }, 1500);

    } catch (error) {
      console.error('Error creating project:', error);
      // Add error handling UI if needed
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 p-8">
        {showSuccess && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-zinc-900 p-8 rounded-2xl flex flex-col items-center gap-4 border border-zinc-800 shadow-2xl">
              <CheckCircle className="w-16 h-16 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Project Submitted!</h2>
              <p className="text-zinc-400">Redirecting to your project...</p>
            </div>
          </div>
        )}

        <div className="max-w-3xl pt-10 mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center text-white">
            Post Project
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/40 backdrop-blur-lg p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-lg font-medium text-white">
                Project Name
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                placeholder="Enter project name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="mediaUrl" className="block text-lg font-medium text-white">
                Image or Video URL
              </label>
              <input
                type="url"
                id="mediaUrl"
                value={formData.mediaUrl}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                placeholder="Enter media URL"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-lg font-medium text-white">
                Description
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                placeholder="Describe your project"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="githubLink" className="block text-lg font-medium text-white">
                  GitHub Link
                </label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    type="url"
                    id="githubLink"
                    value={formData.githubLink}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                    placeholder="GitHub repository URL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="liveLink" className="block text-lg font-medium text-white">
                  Live Link
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    type="url"
                    id="liveLink"
                    value={formData.liveLink}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                    placeholder="Live project URL"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-lg font-medium text-white">Tech Stack</label>
              <div className="flex gap-2 flex-wrap mb-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-zinc-800/70 rounded-full flex items-center gap-2 border border-zinc-700/50 shadow-lg backdrop-blur-sm"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTech(tech)}
                      className="hover:text-red-400 transition"
                    >
                      <X size={16} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())}
                  className="flex-1 px-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                  placeholder="Add technology"
                />
                <button
                  type="button"
                  onClick={addTech}
                  className="px-6 py-3 bg-zinc-800/70 rounded-xl hover:bg-zinc-700/70 transition flex items-center gap-2 shadow-lg border border-zinc-700/50 backdrop-blur-sm"
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-4 bg-white text-black rounded-xl hover:bg-zinc-200 transition font-medium shadow-lg"
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProject;