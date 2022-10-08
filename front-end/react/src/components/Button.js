import React from 'react';

const Button = ({text,onClick}) => {
    // const onClick = ()=>{
    //     console.log("clicked button -> " + {text}.text);
     
    // }
    return (
      <button onClick={onClick} style={{ background: "skyblue" }}>
        {text}
      </button>
    );
};

export default Button;