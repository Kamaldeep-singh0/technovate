import { Search } from 'lucide-react';

export const SearchBar = () => (
  <div className="hidden md:block relative ml-8">
    <input
      type="text"
      placeholder="Search projects..."
      className="w-56 py-1.5 px-4 pl-9 bg-gray-900 border border-gray-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white placeholder-gray-400"
    />
    <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
  </div>
);


