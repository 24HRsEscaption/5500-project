import React from "react";
import {useState} from "react"


function TextInput() {
const textBoxStyles = {
  border: "1px solid black",
  width: "800px",
  fontSize: "34px",
  height: "50px",
  padding: "30px",
  marginTop: "20px",
  marginLeft: "100px",
  fontFamily: "Arial",
};

const btnStyle1 = {
  width: "100px",
  height: "50px",
  display: "inline",
  fontSize: "20px",
  marginLeft: "60px",
  verticalAlign:"middle",
};
const btnStyle2 = {
  marginLeft: "700px",
  backgroundColor: "lightblue",
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

      <p></p>
      <button name="generate" style={{...btnStyle1,...btnStyle2}}>
        Generate
      </button>
      <button name="reset" style={btnStyle1} onClick={() => setVal("")}>
        Reset
      </button>
    </div>
  );
}

export default TextInput
