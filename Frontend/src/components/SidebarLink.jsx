export const SidebarLink = ({ icon: Icon, label }) => (
    <a href="#" className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-gray-800">
      <Icon className="h-5 w-5 mr-3" />
      <span className="font-medium">{label}</span>
    </a>
  );