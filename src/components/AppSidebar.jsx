import React, { useState } from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MusicalNoteIcon,
  PhotoIcon,
  BuildIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DisclaimerIcon,
  ArrowSmallLeftIcon, 
} from '../constants';
import AIStudioColorIcon from '../assets/aistudio-white.svg?react';


const NavItem = ({ icon, label, isActive, onClick, hasSubmenu, isSubmenuOpen, onToggleSubmenu, isSidebarOpen }) => {
  const handleItemClick = () => {
    // If the item has a submenu and the sidebar is collapsed,
    // the main onClick (which usually sets active state or navigates) might be preferred,
    // or it could trigger sidebar expansion. Here, we call onToggleSubmenu which handles expansion.
    if (hasSubmenu) {
      onToggleSubmenu();
    } else {
      onClick();
    }
  };

  return (
    <li>
      <button
        onClick={handleItemClick}
        className={`w-full flex items-center text-sm rounded-md transition-colors group
                    ${isActive ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'}
                    ${isSidebarOpen ? 'px-3 py-2.5' : 'p-3 justify-center'}`}
        aria-current={isActive ? 'page' : undefined}
        title={!isSidebarOpen ? label : undefined}
        aria-label={label}
      >
        {React.cloneElement(icon, { className: `w-5 h-5 flex-shrink-0 ${isSidebarOpen ? 'mr-3' : ''}` })}
        {isSidebarOpen && <span className="flex-grow text-left">{label}</span>}
        {isSidebarOpen && hasSubmenu && (
          isSubmenuOpen ? <ChevronDownIcon className="w-4 h-4 flex-shrink-0" /> : <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
        )}
      </button>
      {isSidebarOpen && hasSubmenu && isSubmenuOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          <li className="text-gray-500 text-xs px-3 py-1">No recent history</li>
        </ul>
      )}
    </li>
  );
};

const AppSidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('chat');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveItem(id);
    if (id !== 'history' || !isSidebarOpen) {
      setIsHistoryOpen(false);
    }
  };

  const handleHistoryToggle = () => {
    if (isSidebarOpen) {
      const newHistoryOpenState = !isHistoryOpen;
      setIsHistoryOpen(newHistoryOpenState);
      if (newHistoryOpenState) setActiveItem('history'); // Set active when opening submenu
    } else {
      toggleSidebar(); // Expand sidebar first if collapsed
      // Consider setting a temporary state to auto-open history after sidebar expands, if desired
    }
  };

  const navItems = [
    { id: 'chat', label: 'Chat', icon: <ChatBubbleOvalLeftEllipsisIcon />, onClick: () => handleNavClick('chat') },
    { id: 'stream', label: 'Stream', icon: <MusicalNoteIcon />, onClick: () => handleNavClick('stream') },
    { id: 'generate-media', label: 'Generate Media', icon: <PhotoIcon />, onClick: () => handleNavClick('generate-media') },
    { id: 'build', label: 'Build', icon: <BuildIcon />, onClick: () => handleNavClick('build') },
  ];

  return (
    <aside className={`bg-gray-950 text-gray-300 flex flex-col fixed inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'}`}>
      {/* Sidebar Header */}
      <div className={`h-16 flex items-center border-b border-gray-800 shrink-0 ${isSidebarOpen ? 'px-4' : 'px-0 justify-center'}`}>
        {isSidebarOpen ? (
          <>
            <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-800" aria-label="Collapse sidebar">
              <AIStudioColorIcon className="w-7 h-7 text-blue-400 mr-2 flex-shrink-0" />
            </button>
            <h1 className="text-xl font-semibold text-white flex-grow">Google AI Studio</h1>

          </>
        ) : (
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-800 h-full w-full flex items-center justify-center" aria-label="Expand sidebar">
            <AIStudioColorIcon className="w-7 h-7 text-blue-400" />
          </button>
        )}
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
              isSidebarOpen={isSidebarOpen}
            />
          ))}
          <NavItem
            icon={<ClockIcon />}
            label="History"
            isActive={activeItem === 'history' && isHistoryOpen && isSidebarOpen} // Visually active only if submenu is open
            onClick={() => { // Main click on History item
              if (!isSidebarOpen) {
                toggleSidebar(); // Expand sidebar if clicking History when collapsed
              } else {
                 setActiveItem('history'); // Set active, submenu toggle is separate
              }
            }}
            hasSubmenu={true}
            isSubmenuOpen={isHistoryOpen}
            onToggleSubmenu={handleHistoryToggle} // This handles submenu and sidebar expansion
            isSidebarOpen={isSidebarOpen}
          />
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className={`shrink-0 border-t border-gray-800 ${isSidebarOpen ? 'p-4' : 'p-3 flex justify-center items-center'}`}>
        {isSidebarOpen ? (
          <div className="flex items-start text-xs text-gray-500">
            <p>
              This model is not stable and may not be suitable for production use.
              <a href="#" className="underline hover:text-gray-400 ml-1">Learn more.</a>
            </p>
          </div>
        ) : (
          <button className="text-gray-500 hover:text-gray-400" title="Disclaimer: This model is not stable and may not be suitable for production use. Learn more.">
            <DisclaimerIcon data-testid="qmark-footer-icon" className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </aside>
  );
};

export default AppSidebar;