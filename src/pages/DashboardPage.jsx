import React from 'react';
import AppSidebar from '../components/AppSidebar';
import WhatsNewCard from '../components/WhatsNewCard';
import {
  KeyIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  Squares2X2Icon,
  PlusCircleIcon,
  ArrowSmallLeftIcon,
  BookmarkIcon,
  CodeBracketSquareIcon,
  ShareIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon
} from '../constants';

const DashboardPage = () => {
  const whatsNewItems = [
    {
      imageUrl: 'https://via.placeholder.com/150/771796', // Placeholder image
      title: 'Native speech generation',
      description: 'Generate high quality text to speech with Gemini',
      newBadge: true,
    },
    {
      imageUrl: 'https://via.placeholder.com/150/24f355', // Placeholder image
      title: 'Live audio-to-audio dialog',
      description: "Try Gemini's natural, real-time dialog with audio and video inputs",
      newBadge: true,
    },
    {
      imageUrl: 'https://via.placeholder.com/150/d32776', // Placeholder image
      title: 'Native image generation',
      description: 'Interleaved text-and-image generation with the new Gemini 2.0 Flash',
    },
    {
      imageUrl: 'https://via.placeholder.com/150/f66b97', // Placeholder image
      title: 'Explore and co-develop apps',
      description: 'See Gemini in action with interactive, open source examples',
    },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <AppSidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col ml-64 overflow-hidden"> {/* ml-64 for fixed sidebar width */}
        {/* Top Header Bar */}
        <header className="h-16 bg-gray-850 border-b border-gray-700 flex items-center justify-between px-6 flex-shrink-0">
          <div className="flex items-center space-x-4">
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
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-700" aria-label="Help">
              <QuestionMarkCircleIcon className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-700" aria-label="Settings">
              <Cog6ToothIcon className="w-5 h-5 text-gray-400" />
            </button>
            <button className="p-1.5 rounded-full hover:bg-gray-700" aria-label="User account">
              <img src="https://via.placeholder.com/28" alt="User avatar" className="w-7 h-7 rounded-full" />
            </button>
             <button className="p-1.5 rounded-full hover:bg-gray-700" aria-label="More options">
              <Squares2X2Icon className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </header>

        {/* Content Area Below Header */}
        <div className="flex-1 flex flex-col p-6 pt-5 overflow-y-auto">
          {/* Secondary Header/Toolbar */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-700/50">
            <h1 className="text-xl font-semibold text-gray-100">Chat Prompt</h1>
            <div className="flex items-center space-x-1.5">
              <button className="p-1.5 rounded-md hover:bg-gray-700" title="Save"><BookmarkIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1.5 rounded-md hover:bg-gray-700" title="View code"><CodeBracketSquareIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1.5 rounded-md hover:bg-gray-700" title="Share"><ShareIcon className="w-5 h-5 text-gray-400" /></button>
              <div className="w-px h-5 bg-gray-700 mx-1"></div>
              <button className="p-1.5 rounded-md hover:bg-gray-700" title="Reset"><ArrowPathIcon className="w-5 h-5 text-gray-400" /></button>
              <button className="p-1.5 rounded-md hover:bg-gray-700" title="More options"><EllipsisVerticalIcon className="w-5 h-5 text-gray-400" /></button>
            </div>
          </div>

          {/* Welcome Section & Prompt Input */}
          <div className="text-center my-8 flex-shrink-0">
            <h2 className="text-4xl font-semibold text-blue-400 mb-8">Welcome to AI Studio</h2>
            <div className="relative max-w-3xl mx-auto flex items-center space-x-2">
              <textarea
                rows="1"
                placeholder="'Item: Apple, Price: $1'. Extract name, price to JSON. →|"
                className="w-full p-4 pr-32 bg-gray-800 border border-gray-700 rounded-full text-gray-300 placeholder-gray-500 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none overflow-hidden"
                style={{ lineHeight: '1.5rem', minHeight: '3.5rem' }}
                onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = (e.target.scrollHeight) + 'px';
                }}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full" title="Add">
                  <PlusCircleIcon className="w-5 h-5 text-gray-300" />
                </button>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm font-medium text-gray-200 flex items-center" title="Run (Ctrl + Enter)">
                  <span>Run</span>
                  <span className="ml-1.5 text-gray-400">Ctrl</span>
                  <ArrowSmallLeftIcon className="w-4 h-4 ml-0.5 text-gray-400 transform rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* "What's new" Section */}
          <div className="mt-10 flex-shrink-0">
            <h3 className="text-md font-medium text-gray-300 mb-4">What's new</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatsNewItems.map((item, index) => (
                <WhatsNewCard
                  key={index}
                  imageUrl={item.imageUrl}
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
    </div>
  );
};

export default DashboardPage;
