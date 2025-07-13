import React from 'react';
import '../../css/MonBouton.module.css';

const MonBouton = ({text,ClassName, children, ...props}) => {

    return (
          <button  className={ClassName} {...props}>
              {children}
              {text}
          </button>
          );
    };
    
    export default MonBouton;

