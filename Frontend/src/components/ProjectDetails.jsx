import { Github, ExternalLink } from 'lucide-react';

export const ProjectDetails = ({ author, date, type, tags, github, live }) => (
  <div className="flex justify-between items-center">
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-600 mr-3" >
        <img
          src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg"
          alt="Author's avatar"
          className="h-10 w-10 rounded-full"
        />
        </div>
      <div>
        <p className="font-medium">{author}</p>
        <p className="text-sm text-gray-400">{date} · {type}</p>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-yellow-400">{tag}</span>
        ))}
      </div>
      <div className="flex gap-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Github className="h-5 w-5" />
        </a>
        <a href={live} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <ExternalLink className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
);