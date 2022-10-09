import React from 'react';
import { useState } from "react";


const btn= ({text,onClick,color}) => {


    return (
      <button style={{ backgroundColor: color }}>
        {text}
      </button>
    );
};

export default btn;