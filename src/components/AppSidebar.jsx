import React, { useState, useEffect } from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MusicalNoteIcon,
  PhotoIcon,
  BuildIcon,
  ClockIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  DisclaimerIcon,
} from '../constants';
import AIStudioColorIcon from '../assets/aistudio-white.svg?react';


const NavItem = ({ icon, label, isActive, onClick, hasSubmenu, isSubmenuOpen, onToggleSubmenu, showText }) => {
  const handleItemClick = () => {
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
                    ${showText ? 'px-3 py-2.5' : 'p-3 justify-center'}`}
        aria-current={isActive ? 'page' : undefined}
        title={!showText ? label : undefined}
        aria-label={label}
      >
        {React.cloneElement(icon, { className: `w-5 h-5 flex-shrink-0 ${showText ? 'mr-3' : ''}` })}
        {showText && <span className="flex-grow text-left">{label}</span>}
        {showText && hasSubmenu && (
          isSubmenuOpen ? <ChevronDownIcon className="w-4 h-4 flex-shrink-0" /> : <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
        )}
      </button>
      {showText && hasSubmenu && isSubmenuOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          <li className="text-gray-500 text-xs px-3 py-1">No recent history</li>
        </ul>
      )}
    </li>
  );
};

const AppSidebar = ({
  isDesktopExpanded,
  toggleDesktopExpansion,
  isMobileOverlayOpen,
  closeMobileOverlay
}) => {
  const [activeItem, setActiveItem] = useState('chat');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const showTextInNavItems = isDesktopExpanded || isMobileOverlayOpen;


  const handleNavClick = (id) => {
    setActiveItem(id);
    if (id !== 'history' || !showTextInNavItems) { // if not showing text (i.e. desktop collapsed), or not history, close submenu
      setIsHistoryOpen(false);
    }
    if (isMobileOverlayOpen) { // If on mobile, clicking a nav item should close the overlay
      closeMobileOverlay();
    }
  };

  const handleHistoryToggle = () => {
    // This toggle is for the submenu content
    if (showTextInNavItems) { // Only allow submenu toggle if sidebar is showing text
        const newHistoryOpenState = !isHistoryOpen;
        setIsHistoryOpen(newHistoryOpenState);
        if (newHistoryOpenState) setActiveItem('history');
    } else if (!isDesktopExpanded && !isMobileOverlayOpen) { // If desktop collapsed, expand it first
        toggleDesktopExpansion();
        // Potentially open history submenu after expansion, if desired
    }
    // If mobile overlay is open and text is shown, this will just toggle the submenu
  };


  const navItems = [
    { id: 'chat', label: 'Chat', icon: <ChatBubbleOvalLeftEllipsisIcon />, onClick: () => handleNavClick('chat') },
    { id: 'stream', label: 'Stream', icon: <MusicalNoteIcon />, onClick: () => handleNavClick('stream') },
    { id: 'generate-media', label: 'Generate Media', icon: <PhotoIcon />, onClick: () => handleNavClick('generate-media') },
    { id: 'build', label: 'Build', icon: <BuildIcon />, onClick: () => handleNavClick('build') },
  ];

  // Sidebar header content based on whether text should be shown (desktop expanded or mobile overlay open)
  const sidebarHeaderContent = showTextInNavItems ? (
    <>
      <button onClick={toggleDesktopExpansion} className="p-2 rounded-md hover:bg-gray-800 hidden md:inline-flex" aria-label="Toggle sidebar width">
        <AIStudioColorIcon className="w-7 h-7 text-blue-400 mr-2 flex-shrink-0" />
      </button>
       {/* On mobile, clicking the logo in the open drawer closes it */}
      <button onClick={isMobileOverlayOpen ? closeMobileOverlay : undefined} className={`p-2 rounded-md ${isMobileOverlayOpen ? 'hover:bg-gray-800' : ''} md:hidden`}>
         <AIStudioColorIcon className="w-7 h-7 text-blue-400 mr-2 flex-shrink-0" />
      </button>
      <h1 className="text-xl font-semibold text-white flex-grow">Google AI Studio</h1>
    </>
  ) : ( // Desktop collapsed state
    <button onClick={toggleDesktopExpansion} className="p-2 rounded-md hover:bg-gray-800 h-full w-full flex items-center justify-center" aria-label="Expand sidebar">
      <AIStudioColorIcon className="w-7 h-7 text-blue-400" />
    </button>
  );


  return (
    <aside
      className={`bg-gray-950 text-gray-300 flex flex-col fixed inset-y-0 left-0 z-40 transition-transform duration-300 ease-in-out
                  ${isMobileOverlayOpen ? 'translate-x-0 w-3/4 max-w-xs shadow-xl' : '-translate-x-full'}
                  md:translate-x-0 md:static md:shadow-none
                  ${isDesktopExpanded ? 'md:w-64' : 'md:w-20'}
                `}
      aria-hidden={!isMobileOverlayOpen && !isDesktopExpanded && !(typeof window !== 'undefined' && window.innerWidth >= 768)} // Hidden if mobile overlay closed AND desktop collapsed
    >
      {/* Sidebar Header */}
      <div className={`h-16 flex items-center border-b border-gray-800 shrink-0
                      ${showTextInNavItems ? 'px-4' : 'px-0 justify-center'}
                      ${isMobileOverlayOpen ? '' : 'md:flex'}`}> {/* ensure header content is flex on desktop */}
        {sidebarHeaderContent}
      </div>

      {/* Navigation */}
      <nav className="flex-grow p-3 space-y-1 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map(item => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeItem === item.id && (item.id !== 'history' || isHistoryOpen)} // History active only if submenu is open
              onClick={item.onClick}
              showText={showTextInNavItems}
            />
          ))}
          <NavItem
            icon={<ClockIcon />}
            label="History"
            isActive={activeItem === 'history' && isHistoryOpen && showTextInNavItems}
            onClick={() => { // Main click on History item
              if (!showTextInNavItems && !isMobileOverlayOpen) { // If desktop collapsed
                toggleDesktopExpansion(); // Expand desktop sidebar
              } else if (isMobileOverlayOpen && !showTextInNavItems) {
                // This case should ideally not happen if showTextInNavItems is true for mobile overlay.
                // But if it does, it implies desktop was collapsed. We might want to expand desktop state.
                toggleDesktopExpansion();
              }
              // The actual submenu toggle is handled by onToggleSubmenu
            }}
            hasSubmenu={true}
            isSubmenuOpen={isHistoryOpen}
            onToggleSubmenu={handleHistoryToggle}
            showText={showTextInNavItems}
          />
        </ul>
      </nav>

      {/* Sidebar Footer */}
      <div className={`shrink-0 border-t border-gray-800 ${showTextInNavItems ? 'p-4' : 'p-3 flex justify-center items-center'}`}>
        {showTextInNavItems ? (
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