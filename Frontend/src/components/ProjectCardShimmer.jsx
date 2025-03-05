import React from "react";
import { motion } from "framer-motion";

const ProjectCardShimmer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black relative overflow-hidden"
    >
    
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black" />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      {/* Shimmer Cards Section */}
      <div className="relative pt-24 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </h1>
          </div>

          {/* Shimmer Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="bg-zinc-900/40 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden"
              >
                {/* Image shimmer */}
                <div className="w-full h-48 bg-gradient-to-r from-zinc-900/40 via-zinc-800/40 to-zinc-900/40 animate-pulse" />

                <div className="p-6">
                  {/* Title and Author Shimmer */}
                  <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-4/6 bg-zinc-800 rounded animate-pulse" />
                  </div> <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-4/6 bg-zinc-800 rounded animate-pulse" />
                  </div>

                  {/* Description shimmer */}
                  <div className="space-y-2 mb-4">
                    <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-5/6 bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 w-4/6 bg-zinc-800 rounded animate-pulse" />
                  </div>

                  {/* Tech Stack shimmer */}
                

                  {/* Stats shimmer */}
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCardShimmer;
