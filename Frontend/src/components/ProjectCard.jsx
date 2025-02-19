import { ProjectRating } from './ProjectRating';
import { ProjectDetails } from './ProjectDetails';

export const ProjectCard = ({ project }) => (
  <div className="bg-gray-950 rounded-xl p-6 transform transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
        {project.title}
      </h3>
      <ProjectRating rating={project.rating} />
    </div>
    <ProjectDetails
      author="Alex Chen"
      date="Mar 12"
      type="Backend Project"
      tags={project.tech}
      github={project.github}
      live={project.live}
    />
    <img
      src={project.image}
      alt="Project thumbnail"
      className="w-full h-48 object-cover rounded-lg pt-2"
    />
  </div>
);
