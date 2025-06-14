import React, { useState } from 'react';
import AppSidebar from '../components/AppSidebar';
import WhatsNewCard from '../components/WhatsNewCard';
import {
  KeyIcon,
  Cog6ToothIcon,
  DocumentTextIcon, 
  ArrowTopRightOnSquareIcon,
  Squares2X2Icon,    
  PlusCircleIcon,
  ArrowSmallLeftIcon,
  BookmarkIcon,         
  CodeBracketSquareIcon,
  ShareIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon,
  PhotoIcon, 
  Bars3Icon,
  RunSettings,
  ProfilePicIcon, 
} from '../constants';


import SpeechIcon from '../assets/text_soundswave.svg?react';
import BlueBlob from '../assets/blue_blob.svg?react';
import HorseChat from '../assets/horse_in_chat.svg?react';
import PromoChat from '../assets/promo_chat.svg?react';

const DashboardPage = () => {
  const [isDesktopSidebarExpanded, setIsDesktopSidebarExpanded] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleDesktopSidebarExpansion = () => {
    setIsDesktopSidebarExpanded(!isDesktopSidebarExpanded);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  }

  const whatsNewItems = [
    {
      imageComponent: <SpeechIcon className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"/>,
      title: 'Native speech generation',
      description: 'Generate high quality text to speech with Gemini',
      newBadge: true,
    },
    {
      imageComponent: <BlueBlob className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"/>,
      title: 'Live audio-to-audio dialog',
      description: "Try Gemini's natural, real-time dialog with audio and video inputs",
      newBadge: true,
    },
    {
      imageComponent: <HorseChat className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg"/>,
      title: 'Native image generation',
      description: 'Interleaved text-and-image generation with the new Gemini 2.0 Flash',
    },
    {
      imageComponent: <PromoChat className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg" />,
      title: 'Explore and co-develop apps',
      description: 'See Gemini in action with interactive, open source examples',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <AppSidebar
        isDesktopExpanded={isDesktopSidebarExpanded}
        toggleDesktopExpansion={toggleDesktopSidebarExpansion}
        isMobileOverlayOpen={isMobileNavOpen}
        closeMobileOverlay={closeMobileNav}
      />
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={closeMobileNav}
          aria-hidden="true"
        ></div>
      )}

      {/* Main Content Area */}
      <main className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out`}>
        {/* Top Header Bar */}
        <header className="h-16 bg-gray-850 border-b border-gray-700 flex items-center px-4 sm:px-6 flex-shrink-0">
          <button
            className="p-2 mr-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 md:hidden"
            onClick={toggleMobileNav}
            aria-label="Open navigation menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
          
          {/* Page Title for mobile, shown when sidebar button exists */}
          <h1 className="text-xl font-semibold text-gray-100 md:hidden">Chat Prompt</h1>


          <div className="flex-grow hidden md:block"></div> {/* Spacer div pushes content to the right on desktop */}
          
          <div className="hidden md:flex items-center space-x-4 mr-6">
            <button className="flex items-center space-x-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium text-gray-200">
              <KeyIcon className="w-4 h-4" />
              <span>Get API key</span>
            </button>
            <nav className="flex items-center space-x-4 text-sm">
              <a href="#" className="text-white font-semibold hover:text-gray-300">Studio</a>
              <a href="#/" className="text-gray-400 hover:text-gray-300">Dashboard</a>
              <a href="#" className="flex items-center text-gray-400 hover:text-gray-300">
                Documentation <ArrowTopRightOnSquareIcon className="w-3 h-3 ml-1" />
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-1 ml-auto md:ml-0"> {/* ml-auto for mobile to push to right */}
            <button className="p-1.5 rounded-full hover:bg-gray-700" aria-label="Settings">
              <Cog6ToothIcon className="w-5 h-5 text-gray-400" />
            </button>
             <button className="p-1.5 rounded-full hover:bg-gray-700/60 md:hidden" aria-label="User Account Options"> {/* Example: show profile on mobile too */}
              <ProfilePicIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </header>

        {/* Content Area Below Header */}
        <div className="flex-1 flex flex-col p-4 sm:p-6 pt-3 sm:pt-5 overflow-y-auto">
          {/* Secondary Header/Toolbar */}
           <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 border-b border-gray-700/50">
            <h1 className="text-xl font-semibold text-gray-100 hidden md:block">Chat Prompt</h1>
            <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto"> {/* Allow horizontal scroll on small screens for icons */}
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="Details"><DocumentTextIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="View code"><CodeBracketSquareIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="Share"><ShareIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="Save version"><BookmarkIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="View options"><Squares2X2Icon className="w-5 h-5 text-gray-400 transform -rotate-45" /></button>
              <div className="h-5 w-px bg-gray-700 mx-1 sm:mx-1.5"></div> {/* Separator */}
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="Reset"><ArrowPathIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1 sm:p-1.5 rounded-md hover:bg-gray-700 whitespace-nowrap" title="More options"><EllipsisVerticalIcon className="w-5 h-5 text-gray-400" /></button>
            </div>
          </div>

          {/* Welcome Section & Prompt Input */}
          <div className="text-center my-4 sm:my-8 flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl font-semibold text-blue-400 mb-6 sm:mb-8">Welcome to AI Studio</h2>
            <div className="relative max-w-3xl mx-auto flex items-center space-x-2">
              <textarea
                rows="1"
                placeholder="'Item: Apple, Price: $1'. Extract name, price to JSON. →|"
                className="w-full p-3 sm:p-4 pr-24 sm:pr-32 bg-gray-800 border border-gray-700 rounded-full text-sm sm:text-base text-gray-300 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none overflow-hidden"
                style={{ lineHeight: '1.5rem', minHeight: '3rem', maxHeight: '10rem' }} // Added maxHeight
                onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 160) + 'px'; // 10rem = 160px approx
                }}
              />
              <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 sm:space-x-2">
                <button className="p-1.5 sm:p-2 bg-gray-700 hover:bg-gray-600 rounded-full" title="Add">
                  <PlusCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                </button>
                <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-xs sm:text-sm font-medium text-gray-200 flex items-center" title="Run (Ctrl + Enter)">
                  <span>Run</span>
                  <span className="ml-1 text-gray-400 hidden sm:inline">Ctrl</span>
                  <ArrowSmallLeftIcon className="w-3 h-4 sm:w-4 sm:h-4 ml-0.5 text-gray-400" />
                </button>
              </div>
            </div>
          </div>

          {/* "What's new" Section */}
          <div className="mt-6 sm:mt-10 flex-shrink-0">
            <h3 className="text-base sm:text-md font-medium text-gray-300 mb-3 sm:mb-4">What's new</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {whatsNewItems.map((item, index) => (
                <WhatsNewCard
                  key={index}
                  imageComponent={item.imageComponent}
                  title={item.title}
                  description={item.description}
                  newBadge={item.newBadge}
                />
              ))}
            </div>
          </div>
           <div className="flex-grow"></div> {/* Spacer to push content up if page is short */}
        </div>
      </main>

      {/* Right Vertical Toolbar */}
      <aside className="w-16 bg-gray-850 border-l border-gray-700 flex-col items-center py-4 space-y-4 flex-shrink-0 hidden md:flex">
        <button className="p-2 rounded-full hover:bg-gray-700/60" aria-label="User Account Options">
          <ProfilePicIcon className="w-6 h-6 text-gray-400" />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-700" aria-label="Parameters">
          <RunSettings className="w-6 h-6 text-gray-400" />
        </button>
        <button className="p-2 rounded-md hover:bg-gray-700" aria-label="Media">
          <PhotoIcon className="w-6 h-6 text-gray-400" />
        </button>
      </aside>
    </div>
  );
};

export default DashboardPage;