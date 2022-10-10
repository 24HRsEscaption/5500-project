import React from "react";

import {useState} from "react"

function TextInput() {

const textBoxStyles = {
  border: '1px solid black',
  width:"200px",
  height:"20px",
  padding:"1px"
};
const [val, setVal] = useState('');

  return (
    <div>
      <label>
        <input
          type="text"
          value={val}
          style={textBoxStyles}
          placeholder="Type in a phrase"
          onChange={(e) => setVal(e.target.value)}
        />
      </label>

      <button name="generate">Generate</button>
      <button onClick={() => setVal('')}>Reset Text</button>
    </div>
  );
}

export default TextInput
