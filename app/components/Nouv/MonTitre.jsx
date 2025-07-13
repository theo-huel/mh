import React from 'react';


const MonTitre = ({ text, className }) => {
    return (
          <h1 className={className}>
              {text}
          </h1>
          );
    };
    
    export default MonTitre;