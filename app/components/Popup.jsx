// src/components/Popup.jsx
import React from "react";

const Popup = ({ isOpen, togglePopup, name, position, description, imageSrc, imageStyle }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm"
      onClick={togglePopup}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 max-w-2xl w-full relative flex gap-6 overflow-hidden shadow-xl"
      >
        <button
          onClick={togglePopup}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>

        {/* Image à gauche */}
        <div className="w-40 h-40 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={imageSrc}
            alt={`${name} - image`}
            className="w-full h-full object-cover"
            style={imageStyle}
          />
        </div>

        {/* Texte à droite */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="text-[#AD9551] mb-4 font-medium">{position}</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
