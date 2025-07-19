import { useState } from "react";

const TeamCard = ({ name, position, imageSrc, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        onClick={togglePopup}
        className="cursor-pointer bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
      >
        <img
          src={imageSrc}
          alt={name}
          className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#AD9551]"
        />
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-[#AD9551] text-sm mb-2">{position}</p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePopup();
          }}
          className="text-sm text-[#AD9551] underline mt-2 hover:text-[#8C7436]"
        >
          En savoir plus
        </button>
      </div>

      {isOpen && (
        <div
    className="fixed inset-0 flex items-center justify-center z-50 bg-white/10 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border rounded-xl p-6 max-w-md w-full relative"
          >
            <button
              onClick={togglePopup}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
             <img 
        src={imageSrc} 
        alt={`${name} - image`} 
          className="w-full h-50 object-cover  rounded-md mb-4"
style={{
    objectPosition: 'center 20%'
      }}      />

            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-[#AD9551] mb-4 font-medium">{position}</p>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamCard;
