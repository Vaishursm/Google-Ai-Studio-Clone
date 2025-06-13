import React from 'react';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Welcome to AI Studio Clone</h1>
      <p className="text-gray-600 dark:text-gray-300">This is the Home Page.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-slate-200 mb-2">Create a new Prompt</h2>
          <p className="text-gray-600 dark:text-slate-400 mb-4">Start experimenting with generative models by creating a new prompt.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">New Prompt</button>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-slate-200 mb-2">Explore Examples</h2>
          <p className="text-gray-600 dark:text-slate-400 mb-4">Discover what's possible with a gallery of examples.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">Browse Gallery</button>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-slate-200 mb-2">API Keys</h2>
          <p className="text-gray-600 dark:text-slate-400 mb-4">Manage your API keys to integrate models into your applications.</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out">Get API Key</button>
        </div>
      </div>
      <div className="mt-8 text-center">
        <a href="#/app" className="text-blue-500 dark:text-blue-400 hover:underline">Go to Dashboard (Simulated Login)</a>
      </div>
    </div>
  );
};

export default HomePage;