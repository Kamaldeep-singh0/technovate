import { Home, Network, Bell, MessageSquare } from 'lucide-react';
import { SidebarLink } from './SidebarLink';

export const Sidebar = () => (
  <div className="p-4 flex flex-col gap-1">
    <SidebarLink icon={Home} label="Home" />
    <SidebarLink icon={Network} label="Network" />
    <SidebarLink icon={Bell} label="Notifications" />
    <div className="border-t border-gray-800 my-2 pt-2">
      <h3 className="text-sm font-medium text-gray-400 px-4 py-2">Messages</h3>
      <SidebarLink icon={MessageSquare} label="Peer Messages" />
      <SidebarLink icon={MessageSquare} label="Industry Messages" />
    </div>
  </div>
);
