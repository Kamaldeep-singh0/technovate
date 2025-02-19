import { ProjectRating } from './ProjectRating';
import { ProjectDetails } from './ProjectDetails';

export const FeaturedProject = () => (
  <div className="mb-12 bg-gray-950 rounded-xl p-6 transform transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
    <img
      src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop&q=80"
      alt="Featured Project"
      className="w-full h-80 object-cover rounded-lg mb-6"
    />
    <div className="flex justify-between items-start mb-4">
      <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
        AI-Powered Portfolio Generator
      </h2>
      <ProjectRating rating={5} />
    </div>
    <ProjectDetails
      author="Sarah Johnson"
      date="Mar 15"
      type="Full Stack Project"
      tags={['React', 'AI']}
      github="https://github.com/portfolio-ai/generator"
      live="https://portfolio-ai-gen.vercel.app"
    />
  </div>
);