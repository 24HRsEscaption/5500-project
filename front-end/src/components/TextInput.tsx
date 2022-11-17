import { borderRadius } from "@mui/system";
import React from "react";
import {useState} from "react"
import Helpbtn from "./Helpbtn";
import {FaTrash} from "react-icons/fa";


function TextInput(props: any) {
const textBoxStyles = {
  border: "1px solid black",
  width: "800px",
  fontSize: "20px",
  height: "120px",
  padding: "30px",
  marginTop: "20px",
  marginLeft: "100px",
  fontFamily: "Arial",
  borderRadius: "20px",
  // textAlign: "left",
};


const button = {
  display: "block",
  justifyContent: "right",
  alignItems: "right",
  marginLeft: "100px",
  
};

const btnStyle1 = {
  width: "100px",
  height: "50px",
  display: "inline",
  fontSize: "20px",
  verticalAlign:"middle",
  borderRadius: "15px",
  margin: "10px",
};
// const btnStyle2 = {
//   margin: "10px",
  

//   backgroundColor: "lightblue",
//   borderRadius: "20px",
// };
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
        <textarea
          value={val}
          style={textBoxStyles}
          placeholder="Enter your text here"
          onChange={(e) => setVal(e.target.value)}
        />
        <span style={{position:"absolute", top: "260px", right: "440px"}}><FaTrash onClick={onReset}/></span>
      </label>

      <p></p>
      <div style={button}>
      <button
        name="generate"
        style={{ ...btnStyle1, }}
        onClick={() => handleGenerate(val)}
      >
        Generate
      </button>
      {/* <button name="reset" style={btnStyle1} onClick={onReset}>
        Reset
      </button> */}
      </div>
      <br></br>
      {
        error !== '' &&
        <div style={errorStyles}>{error}</div>
      }
    </div>
  );
}

export default TextInput
