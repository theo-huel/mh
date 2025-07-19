import React, { useState } from "react";

const values = {
  M: "Méthode : Des outils concrets pour structurer et agir.",
  H: "Humain : L’accompagnement commence par l’écoute et la confiance.",
  B: "Business-oriented : Chaque action vise la performance et la croissance.",
  U: "Utilité : Des conseils réellement applicables, pensés pour le terrain.",
  S: "Stratégie : On ne laisse rien au hasard, tout part d’une vision claire.",
  I: "Impact : Ce qui compte, ce sont les résultats durables.",
  N: "Network : Un réseau solide pour multiplier les opportunités.",
  E: "Engagement : Présents à chaque étape, pour aller au bout ensemble.",
  S2: "Simplicité : Rendre accessible ce qui paraît complexe.",
  S3: "Souplesse : S’adapter à chaque entreprise, chaque réalité.",
};

const InteractiveWord = () => {
  const [hoveredLetter, setHoveredLetter] = useState("");

  const displayValue = () => {
    if (hoveredLetter === "S") {
      return (
        <>
          <p>{values["S2"]}</p>
          <p>{values["S3"]}</p>
        </>
      );
    }
    return <p>{values[hoveredLetter]}</p>;
  };

  return (
    <div className="flex flex-col items-center space-y-6 mt-12">
      <h3 className="text-3xl font-bold text-gray-900">Valeurs</h3>

      <div className="flex space-x-4 text-4xl font-extrabold text-gray-800">
        {["M", "H", "B", "U", "S", "I", "N", "E", "S", "S"].map((letter, index) => (
          <span
            key={index}
            onMouseEnter={() => setHoveredLetter(letter)}
            onMouseLeave={() => setHoveredLetter("")}
            className={`transition duration-200 cursor-pointer ${
              hoveredLetter === letter ? "text-[#AD9551] scale-125" : "hover:scale-110"
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Texte affiché avec effet et encadré */}
      {hoveredLetter && (
        <div className="relative mt-2 max-w-lg px-6 py-4 bg-white rounded-xl shadow-md text-gray-700 text-center text-lg animate-fade-in transition-opacity duration-300 ease-in-out">
          {/* Flèche vers le haut */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md" />
          {displayValue()}
        </div>
      )}
    </div>
  );
};

export default InteractiveWord;
