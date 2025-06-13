import React, { useState } from 'react';
import { PlusIcon, Cog6ToothIcon, ChevronRightIcon } from '../constants';

const NavItem = ({ icon, label, isActive, onClick, children, isExpanded, onToggleExpand, isSidebarOpen }) => {
  const itemContent = [];

  if (icon) {
    itemContent.push(React.cloneElement(icon, { key: 'icon', className: "w-5 h-5 flex-shrink-0" + (isSidebarOpen ? " mr-3" : " mx-auto") }));
  }

  if (isSidebarOpen) {
    itemContent.push(<span className="flex-grow" key='label'>{label}</span>);
    if (children) {
      itemContent.push(
        <ChevronRightIcon
          key='chevron'
          className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''} flex-shrink-0`}
        />
      );
    }
  }


  return (
    <li className="mb-1">
      <div
        className={`flex items-center p-2 text-sm rounded-md cursor-pointer transition-colors ${
          isActive
            ? 'bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-100'
            : 'text-slate-600 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        } ${!isSidebarOpen && 'justify-center'}`}
        onClick={children ? onToggleExpand : onClick}
        title={!isSidebarOpen ? label : ""} // Show tooltip when sidebar is collapsed
        aria-label={label}
      >
        {itemContent}
      </div>
      {isSidebarOpen && children && isExpanded && (
        <ul className="pl-6 mt-1 space-y-1">
          {children}
        </ul>
      )}
    </li>
  );
};

const Sidebar = ({ isSidebarOpen, navSections, onNewButtonClick, onSettingsClick }) => {
  const [expandedItems, setExpandedItems] = useState({});

  const handleToggleExpand = (id) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleItemClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      if (item.external) {
        window.open(item.href, '_blank');
      } else {
        window.location.hash = item.href;
      }
    } else {
        console.log("Clicked:", item.label);
    }
  };
  
  return (
    <aside className={`transition-all duration-300 ease-in-out bg-white dark:bg-slate-800 shadow-lg ${isSidebarOpen ? 'w-64' : 'w-16'} flex flex-col border-r border-slate-200 dark:border-slate-700`}>
      <div className="p-3 border-b border-slate-200 dark:border-slate-700">
        <button
          onClick={onNewButtonClick}
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-3 rounded-md transition-all duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          aria-label={isSidebarOpen ? "Create new item" : "New"}
        >
          <PlusIcon className="w-5 h-5 flex-shrink-0" />
          {isSidebarOpen && <span className="ml-2">New</span>}
        </button>
      </div>

      <nav className="flex-grow p-2 space-y-1 overflow-y-auto">
        {navSections.map((section, sectionIndex) => (
          <div key={section.title || `section-${sectionIndex}`}>
            {isSidebarOpen && section.title && (
              <div className="px-2 py-3 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {section.title}
              </div>
            )}
            {!isSidebarOpen && section.title && (
                 <div className="h-6"></div> // Placeholder for spacing when title would be
            )}
            <ul className="space-y-1">
              {section.items.map(item => (
                <NavItem
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  onClick={() => handleItemClick(item)}
                  isActive={false} // Implement active state logic if needed
                  isSidebarOpen={isSidebarOpen}
                />
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-2 border-t border-slate-200 dark:border-slate-700">
        <ul>
          <NavItem
            icon={<Cog6ToothIcon />}
            label={"Settings"}
            onClick={onSettingsClick}
            isSidebarOpen={isSidebarOpen}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;