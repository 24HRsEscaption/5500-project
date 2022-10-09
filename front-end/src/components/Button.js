import React from 'react';

const Button = ({text,onClick,color}) => {

    return (
      <button onClick={onClick} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
};

export default Button;