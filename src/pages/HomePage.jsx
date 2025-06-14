import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '../constants'; 
import bgImage from "../assets/bg.png";

const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center relative">
        <Link to="/app"> {/* Ensure logo/title links to the app dashboard */}
          <h1 className="text-lg sm:text-xl font-semibold hover:text-gray-300 transition-colors">Google AI Studio</h1>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <a
            href="#" // Replace with actual link
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            Gemini API Docs
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Pricing
          </a>
        </nav>

        {/* Mobile Nav Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-20 mr-4">
            <a
              href="#" // Replace with actual link
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gemini API Docs
            </a>
            <a
              href="#" // Replace with actual link
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <div className="md:pr-8 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 sm:mb-6 leading-tight">
              Build with the latest models from Google DeepMind
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10">
              Get your API key and integrate powerful AI capabilities into your
              applications in less than 5 minutes.
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/app"
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
              >
                Sign in to Google AI Studio
              </Link>
              <a
                href="#" // Replace with actual link
                className="w-full sm:w-auto px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 font-semibold transition-colors border border-gray-700 hover:border-gray-600 text-sm sm:text-base"
              >
                Read API Docs
              </a>
            </div>
          </div>

          {/* Right Column - UI Mockup */}
          <div className="flex justify-center md:pl-8 mt-8 md:mt-0">
            <img
              src={bgImage} 
              alt="UI Mockup"
              className="w-full max-w-md md:max-w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;