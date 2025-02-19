import { FolderPlus } from 'lucide-react';

export const PostProjectButton = () => (
  <button className="flex items-center px-4 py-1.5 bg-gradient-to-r from-yellow-600 to-yellow-600 text-black rounded-full text-sm hover:from-yellow-600 hover:to-yellow-600 transition-all transform hover:scale-105">
    Post Project
    <FolderPlus className="ml-2 h-4 w-4" />
  </button>
);