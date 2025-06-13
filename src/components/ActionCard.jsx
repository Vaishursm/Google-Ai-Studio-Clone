import React from 'react';

const ActionCard = ({ icon, title, description, actionText, onActionClick }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-lg transition-shadow duration-200 flex flex-col border border-slate-200 dark:border-slate-700/60">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="ml-3 text-lg font-semibold text-slate-700 dark:text-slate-200">{title}</h3>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">{description}</p>
      <button
        onClick={onActionClick}
        className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline self-start"
        aria-label={`${actionText} for ${title}`}
      >
        {actionText} &rarr;
      </button>
    </div>
  );
};

export default ActionCard;