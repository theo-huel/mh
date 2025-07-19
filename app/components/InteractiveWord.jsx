import React, { useState } from "react";

const values = {
  M: "Méthode : Des outils concrets pour structurer et agir.",
  H: "Humain : L’accompagnement commence par l’écoute et la confiance.",
  B: "Business-oriented : Chaque action vise la performance et la croissance.",
  U: "Utilité : Des conseils réellement applicables, pensés pour le terrain.",
  S1: "Stratégie : On ne laisse rien au hasard, tout part d’une vision claire.",
  I: "Impact : Ce qui compte, ce sont les résultats durables.",
  N: "Network : Un réseau solide pour multiplier les opportunités.",
  E: "Engagement : Présents à chaque étape, pour aller au bout ensemble.",
  S2: "Simplicité : Rendre accessible ce qui paraît complexe.",
  S3: "Souplesse : S’adapter à chaque entreprise, chaque réalité.",
};

const letters = [
  { key: "M", display: "M" },
  { key: "H", display: "H" },
  { key: "B", display: "B" },
  { key: "U", display: "U" },
  { key: "S1", display: "S" },
  { key: "I", display: "I" },
  { key: "N", display: "N" },
  { key: "E", display: "E" },
  { key: "S2", display: "S" },
  { key: "S3", display: "S" },
];

const InteractiveWord = () => {
  const [hoveredKey, setHoveredKey] = useState(null);

  return (
    <div className="flex flex-col items-center space-y-6 mt-12">
      <div
        className="flex flex-wrap justify-center space-x-4 text-4xl font-extrabold text-gray-800"
        onMouseLeave={() => setHoveredKey(null)} // 🟡 Reset au message d'intro
      >
        {letters.map(({ key, display }, index) => (
          <span
            key={index}
            onMouseEnter={() => setHoveredKey(key)}
            className={`transition duration-200 cursor-pointer ${
              hoveredKey === key ? "text-[#AD9551] scale-125" : "hover:scale-110"
            }`}
          >
            {display}
          </span>
        ))}
      </div>

      {/* Texte affiché */}
      <div className="relative mt-4 max-w-lg px-6 py-4 bg-white rounded-xl shadow-md text-gray-700 text-center text-lg animate-fade-in transition-opacity duration-300 ease-in-out">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md" />
        {hoveredKey ? (
        <p>
          <strong>{values[hoveredKey].split(":")[0]}</strong> :{values[hoveredKey].split(":")[1]}
        </p>
      ) : (
        <p>Survole chaque lettre pour découvrir nos valeurs.</p>
      )}
      </div>
    </div>
  );
};

export default InteractiveWord;








// import React, { useState } from "react";
// const values = {
//   M: "Méthode : Des outils concrets pour structurer et agir.",
//   H: "Humain : L’accompagnement commence par l’écoute et la confiance.",
//   B: "Business-oriented : Chaque action vise la performance et la croissance.",
//   U: "Utilité : Des conseils réellement applicables, pensés pour le terrain.",
//   S1: "Stratégie : On ne laisse rien au hasard, tout part d’une vision claire.",
//   I: "Impact : Ce qui compte, ce sont les résultats durables.",
//   N: "Network : Un réseau solide pour multiplier les opportunités.",
//   E: "Engagement : Présents à chaque étape, pour aller au bout ensemble.",
//   S2: "Simplicité : Rendre accessible ce qui paraît complexe.",
//   S3: "Souplesse : S’adapter à chaque entreprise, chaque réalité.",
// };

// const letters = [
//   { key: "M", display: "M" },
//   { key: "H", display: "H" },
//   { key: "B", display: "B" },
//   { key: "U", display: "U" },
//   { key: "S1", display: "S" },
//   { key: "I", display: "I" },
//   { key: "N", display: "N" },
//   { key: "E", display: "E" },
//   { key: "S2", display: "S" },
//   { key: "S3", display: "S" },
// ];

// const InteractiveWord = () => {
//   const [hoveredKey, setHoveredKey] = useState("M");

//   return (
//     <div className="flex flex-col items-center space-y-6 mt-12">

//       <div
//         className="flex flex-wrap justify-center space-x-4 text-4xl font-extrabold text-gray-800"
//         onMouseLeave={() => setHoveredKey("M")} // 🟡 Revient à "M" par défaut
//       >
//         {letters.map(({ key, display }, index) => (
//           <span
//             key={index}
//             onMouseEnter={() => setHoveredKey(key)}
//             className={`transition duration-200 cursor-pointer ${
//               hoveredKey === key ? "text-[#AD9551] scale-125" : "hover:scale-110"
//             }`}
//           >
//             {display}
//           </span>
//         ))}
//       </div>

//       {hoveredKey && (
//         <div className="relative mt-2 max-w-lg px-6 py-4 bg-white rounded-xl shadow-md text-gray-700 text-center text-lg animate-fade-in transition-opacity duration-300 ease-in-out">
//           <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md" />
//           <p>{values[hoveredKey]}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InteractiveWord;
