import React from "react";
import {useState} from "react"
import Helpbtn from "./Helpbtn";


function TextInput(props: any) {
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
const errorStyles = {
  marginLeft: '100px',
  marginTop: '15px',
  padding: '15px',
  border: '1px solid red',
  backgroundColor: '#fcd7d7',
  width: '830px'
}


const [val, setVal] = useState('');
const [error, setError] = useState('');

  const onReset = () => {
    setVal('');
    props.handleReset();
  }

  const handleGenerate = (val: string) => {
    if (!val) {
      setError('Please enter a valid text to generate.');
      return;
    }
    if (val.length > 50) {
      setError('Please enter text that is shorter than 50 characters.');
      return;
    }
    if (!/^[A-Za-z0-9 ]*$/.test(val)) {
      setError('Invalid characters found.');
      return;
    }
    setError('');
    props.onGenerate(val.replace(/\s+/g,' ').trim());
  }

  return (
    <div>
      <label>
        <Helpbtn></Helpbtn>
        <input
          type="text"
          value={val}
          style={textBoxStyles}
          placeholder="Type in a phrase"
          onChange={(e) => setVal(e.target.value)}
        />
      </label>

      <p></p>
      <button
        name="generate"
        style={{ ...btnStyle1, ...btnStyle2 }}
        onClick={() => handleGenerate(val)}
      >
        Generate
      </button>
      <button name="reset" style={btnStyle1} onClick={onReset}>
        Reset
      </button>
      <br></br>
      {
        error !== '' &&
        <div style={errorStyles}>{error}</div>
      }
    </div>
  );
}

export default TextInput
