import React, { useState } from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MusicalNoteIcon, // For Stream
  PhotoIcon, // For Generate Media
  CubeTransparentIcon, // For Build
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SparklesIcon // Placeholder for Google AI Studio logo
} from '../constants';

const NavItem = ({ icon, label, isActive, onClick, hasSubmenu, isSubmenuOpen, onToggleSubmenu }) => {
  return (
    <li>
      <button
        onClick={hasSubmenu ? onToggleSubmenu : onClick}
        className={`w-full flex items-center px-3 py-2.5 text-sm rounded-md transition-colors
                    ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {React.cloneElement(icon, { className: "w-5 h-5 mr-3 flex-shrink-0" })}
        <span className="flex-grow text-left">{label}</span>
        {hasSubmenu && (
          isSubmenuOpen ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />
        )}
      </button>
      {hasSubmenu && isSubmenuOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          {/* Placeholder for history items */}
          <li className="text-gray-500 text-xs px-3 py-1">No recent history</li>
        </ul>
      )}
    </li>
  );
};

const AppSidebar = () => {
  const [activeItem, setActiveItem] = useState('chat');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveItem(id);
    if (id !== 'history') {
        setIsHistoryOpen(false);
    }
  };

  const navItems = [
    { id: 'chat', label: 'Chat', icon: <ChatBubbleOvalLeftEllipsisIcon />, onClick: () => handleNavClick('chat') },
    { id: 'stream', label: 'Stream', icon: <MusicalNoteIcon />, onClick: () => handleNavClick('stream') },
    { id: 'generate-media', label: 'Generate Media', icon: <PhotoIcon />, onClick: () => handleNavClick('generate-media') },
    { id: 'build', label: 'Build', icon: <CubeTransparentIcon />, onClick: () => handleNavClick('build') },
  ];

  return (
    <aside className="w-64 bg-gray-950 text-gray-300 flex flex-col fixed inset-y-0 left-0 z-30">
      {/* Sidebar Header */}
      <div className="h-16 flex items-center px-4 border-b border-gray-800">
        <SparklesIcon className="w-7 h-7 text-blue-400 mr-2" />
        <h1 className="text-xl font-semibold text-white">Google AI Studio</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-3 space-y-1 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map(item => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id}
              onClick={item.onClick}
            />
          ))}
          <NavItem
            icon={<ClockIcon />}
            label="History"
            isActive={activeItem === 'history'}
            onClick={() => handleNavClick('history')}
            hasSubmenu={true}
            isSubmenuOpen={isHistoryOpen}
            onToggleSubmenu={() => setIsHistoryOpen(!isHistoryOpen)}
          />
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          This model is not stable and may not be suitable for production use.
          <a href="#" className="underline hover:text-gray-400 ml-1">Learn more.</a>
        </p>
      </div>
    </aside>
  );
};

export default AppSidebar;
