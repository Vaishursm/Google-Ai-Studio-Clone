import React from 'react';
import { Link } from 'react-router-dom';
import { MusicalNoteIcon, SparklesIcon } from '../constants'; // Assuming these are for the mock UI

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="py-6 px-8 sm:px-12 md:px-16 lg:px-24 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Google AI Studio</h1>
        <nav className="flex items-center space-x-4">
          <a
            href="#"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
          >
            Gemini API Docs
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
            Pricing
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center px-8 sm:px-12 md:px-16 lg:px-24 py-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="md:pr-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build with the latest models from Google DeepMind
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              Get your API key and integrate powerful AI capabilities into your
              applications in less than 5 minutes.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/app"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Sign in to Google AI Studio
              </Link>
              <a
                href="#"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 font-semibold transition-colors border border-gray-700 hover:border-gray-600"
              >
                Read API Docs
              </a>
            </div>
          </div>

          {/* Right Column - UI Mockup */}
          <div className="bg-slate-800/50 backdrop-blur-md p-1 rounded-xl shadow-2xl border border-slate-700/50">
            <div className="bg-[#0D1117] p-4 rounded-t-lg">
              <pre className="text-xs text-gray-400 overflow-x-auto custom-scrollbar">
                <code className="font-mono">
                  <span className="text-purple-400">model</span> = <span className="text-blue-400">genai.GenerativeModel</span>(<span className="text-green-400">model_name</span>=<span className="text-yellow-400">'gemini-1.5-flash'</span>)<br />
                  <span className="text-purple-400">response</span> = <span className="text-blue-400">model.generate_content</span>([<span className="text-yellow-400">"What is in this photo?"</span>, img])<br />
                  <span className="text-red-400">print</span>(<span className="text-purple-400">response.text</span>)
                </code>
              </pre>
            </div>
            <div className="bg-slate-800 p-6 flex">
              <div className="w-16 flex-shrink-0 space-y-4 pt-2">
                {/* Mock icons for a left bar in the UI */}
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 text-sm">U</div>
                <div className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center">
                  <PlusIcon className="w-4 h-4 text-slate-400"/>
                </div>
                 <div className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                </div>
              </div>
              <div className="flex-grow min-w-0">
                <p className="text-xs text-gray-500 mb-1">USER</p>
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Split audio recording into segments <br /> and include <span className="text-blue-400">transcriptions</span>
                </h3>
                <div className="bg-slate-700/50 p-6 rounded-lg flex flex-col items-center justify-center min-h-[150px] mb-4">
                  <MusicalNoteIcon className="w-16 h-16 text-blue-500 opacity-60 mb-3" />
                  <div className="w-full text-xs text-gray-400 flex items-center">
                    <span>0:00 / 1:49</span>
                    <div className="flex-grow h-1 bg-slate-600 rounded-full mx-2 overflow-hidden">
                        <div className="h-full bg-blue-500 w-1/4"></div>
                    </div>
                    <span>generative_ai_audio_c...</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg">
                    <span className="text-sm text-gray-400">Running...</span>
                    <button className="flex items-center px-4 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-md">
                        <SparklesIcon className="w-4 h-4 mr-2 text-blue-400" />
                        Stop
                    </button>
                </div>
              </div>
              <div className="w-48 flex-shrink-0 ml-6 pl-6 border-l border-slate-700">
                <h4 className="text-xs font-semibold text-gray-500 mb-3">MODELS</h4>
                <ul className="space-y-1 text-sm">
                  {['Gemini 2.0 Flash Exp', 'Gemini 1.5 Pro', 'Gemini 1.5 Flash', 'Gemini 1.5 Flash-8B'].map((model, idx) => (
                    <li key={model}>
                      <button className={`w-full text-left px-3 py-1.5 rounded-md transition-colors ${idx === 0 ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-slate-700 hover:text-gray-200'}`}>
                        {model}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const PlusIcon = (props) => ( // Minimal PlusIcon for the mock UI
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );

export default HomePage;
