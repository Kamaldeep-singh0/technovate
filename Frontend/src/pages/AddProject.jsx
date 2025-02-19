import React, { useState } from 'react';
import { Github, Globe, Plus, X, CheckCircle } from 'lucide-react';

const AddProject = () => {
  const [techStack, setTechStack] = useState([]);
  const [newTech, setNewTech] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    mediaUrl: '',
    description: '',
    githubUrl: '',
    liveUrl: ''
  });

  const addTech = () => {
    if (newTech.trim()) {
      setTechStack([...techStack, { id: crypto.randomUUID(), name: newTech.trim() }]);
      setNewTech('');
    }
  };

  const removeTech = (id) => {
    setTechStack(techStack.filter(tech => tech.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        projectName: '',
        mediaUrl: '',
        description: '',
        githubUrl: '',
        liveUrl: ''
      });
      setTechStack([]);
    }, 3000);
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
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {showSuccess && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-zinc-900 p-8 rounded-2xl flex flex-col items-center gap-4 border border-zinc-800 shadow-2xl">
              <CheckCircle className="w-16 h-16 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Project Submitted!</h2>
              <p className="text-zinc-400">Your project has been successfully added</p>
            </div>
          </div>
        )}

        <div className="max-w-3xl pt-10 mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center text-white">
            Post Project
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-8 bg-zinc-900/40 backdrop-blur-lg p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
            <div className="space-y-2">
              <label htmlFor="projectName" className="block text-lg font-medium text-white">
                Project Name
              </label>
              <input
                type="text"
                id="projectName"
                value={formData.projectName}
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
                <label htmlFor="githubUrl" className="block text-lg font-medium text-white">
                  GitHub Link
                </label>
                <div className="relative">
                  <Github className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    type="url"
                    id="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/50 border border-zinc-800 focus:border-white focus:ring-1 focus:ring-white outline-none transition text-white placeholder-zinc-500"
                    placeholder="GitHub repository URL"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="liveUrl" className="block text-lg font-medium text-white">
                  Live Link
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" size={20} />
                  <input
                    type="url"
                    id="liveUrl"
                    value={formData.liveUrl}
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
                {techStack.map((tech) => (
                  <span
                    key={tech.id}
                    className="px-4 py-1.5 bg-zinc-800/70 rounded-full flex items-center gap-2 border border-zinc-700/50 shadow-lg backdrop-blur-sm"
                  >
                    {tech.name}
                    <button
                      type="button"
                      onClick={() => removeTech(tech.id)}
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