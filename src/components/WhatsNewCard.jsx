import React from "react";

const WhatsNewCard = ({ imageComponent, title, description, newBadge }) => {
  return (
    <div className="bg-gray-800 p-3 sm:p-4 rounded-lg flex items-start space-x-3 sm:space-x-4 hover:bg-gray-700/70 transition-colors cursor-pointer">
      {imageComponent && React.cloneElement(imageComponent, { className: "w-12 h-12 sm:w-16 h-16 rounded-md flex-shrink-0 mt-1" })}
      {!imageComponent && <div className="w-12 h-12 sm:w-16 h-16 rounded-md bg-gray-700 flex-shrink-0 mt-1"></div>}
      <div>
        <div className="flex items-center mb-1">
          <h4 className="text-sm sm:text-base font-semibold text-gray-100">{title}</h4>
          {newBadge && (
            <span className="ml-2 px-1.5 sm:px-2 py-0.5 bg-blue-500 text-white text-xs font-semibold rounded-full">
              New
            </span>
          )}
        </div>
        <p className="text-xs sm:text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default WhatsNewCard;