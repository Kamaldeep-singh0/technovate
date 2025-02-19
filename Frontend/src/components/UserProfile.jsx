import { User } from 'lucide-react';

export const UserProfile = () => (
  <div className="text-center">
  <div className="h-24 w-24 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-600 mx-auto mb-4 flex items-center justify-center p-1">
  <div className="bg-gray-900 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
    <img 
      src="https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg"
      alt="User Avatar" 
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>

    <h3 className="text-xl font-serif font-bold mb-1 bg-gradient-to-r from-yellow-600 to-yellow-600 bg-clip-text text-transparent">John Doe</h3>
    <p className="text-gray-300 mb-4">Full Stack Developer</p>
    <div className="text-sm text-gray-400 flex flex-col gap-2">
      <p>12 Projects Published</p>
      <p>500+ Profile Views</p>
      <p>4.8 Average Rating</p>
    </div>
    <button className="mt-6 w-full py-2 px-4 border border-yellow-500 rounded-full hover:bg-yellow-500/10 transition-colors text-yellow-400">
      Edit Profile
    </button>
    <div className="mt-8 border-t border-gray-800 pt-6">
      <h4 className="font-medium mb-4 text-gray-300">Top Skills</h4>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-yellow-500">React</span>
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-yellow-500">Node.js</span>
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-yellow-500">TypeScript</span>
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-yellow-500">AWS</span>
      </div>
    </div>
  </div>
);