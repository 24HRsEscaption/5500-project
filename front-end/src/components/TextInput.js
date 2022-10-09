import React from "react";

import {useState} from "react"

function TextInput() {

const textBoxStyles = {
  border: '1px solid black',
  width:"200px",
  height:"20px",
  padding:"1px"
};
const [val, setVal] = useState();

  return (
    <div>
      <label>
        {/* <strong>UserInput&nbsp;&nbsp;</strong> */}
        <input
          type="text"
          value={val}
          style={textBoxStyles}
          placeholder="Type in a phrase"
        />
      </label>

      {/* <Button color="skyblue" onClick="generate" text="Generate" /> */}
      <button name="generate">Generate</button>
      <button onClick={() => setVal(() => "")}>Reset Text</button>
    </div>
  );
}

export default TextInput
