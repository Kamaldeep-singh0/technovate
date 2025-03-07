import React from 'react';
import { motion } from 'framer-motion';
import { Mail,  MapPin, Book, Briefcase } from 'lucide-react';

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-12">
          <div className="flex items-start gap-8">
            <img
              src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white/10"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                <h1 className="text-4xl font-bold mb-2">Kamaldeep singh</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1> <h1 className="text-4xl font-bold mb-2">Alex Thompson</h1>v
                  <p className="text-gray-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                   Punajab, India
                  </p>
                </div>
                <button className="px-6 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors">
                  Edit Profile
                </button>
              </div>
              <div className="flex gap-4 mt-4">
                <SocialLink icon={<Mail className="w-5 h-5" />} href="#" />
                <SocialLink icon={<GitHub className="w-5 h-5" />} href="#" />
                <SocialLink icon={<LinkedIn className="w-5 h-5" />} href="#" />
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="text-gray-300 mb-6">
              Final year Computer Science student at Stanford University with a passion for building innovative solutions. 
              Focused on full-stack development and machine learning. Looking for opportunities to create meaningful impact 
              through technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard
                icon={<Book className="w-6 h-6" />}
                title="Education"
                items={[
                  "BS Computer Science, Stanford University",
                  "Expected Graduation: 2024"
                ]}
              />
              <InfoCard
                icon={<Briefcase className="w-6 h-6" />}
                title="Experience"
                items={[
                  "Software Engineering Intern, Google",
                  "Research Assistant, AI Lab"
                ]}
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SocialLink = ({ icon, href }) => (
  <a
    href={href}
    className="p-2 border border-white/10 rounded-full hover:bg-white/5 transition-colors"
  >
    {icon}
  </a>
);

const InfoCard = ({ icon, title, items }) => (
  <div className="border border-white/10 rounded-lg p-6">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-300">{item}</li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ project }) => (
  <div className="border border-white/10 rounded-lg overflow-hidden hover:border-white/20 transition-all">
    <img
      src="/api/placeholder/400/200"
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Python",
  "Machine Learning", "AWS", "Docker", "Git", "GraphQL"
];

const userProjects = [
  {
    title: "Neural Network Visualizer",
    description: "Interactive tool for visualizing neural network architectures and training processes.",
    image: "/api/placeholder/400/200",
    technologies: ["Python", "TensorFlow", "React"]
  },
  {
    title: "Sustainable City Platform",
    description: "Platform for tracking and optimizing urban sustainability metrics.",
    image: "/api/placeholder/400/200",
    technologies: ["Node.js", "React", "MongoDB"]
  }
];

export default Profile;