import * as React from "react";
// import Button from "@mui/material/Button";
// import HelpIcon from "@mui/icons-material/Help";
import {BsQuestionCircle} from "react-icons/bs";



export default function Helpbtn() {

const helptext="Hello User.\n1. Type in a phrase and modify the /SPEED/PITCH/ENERGY. \n2. Click Generate. \n3. Click the play button for the audio.\n4. Click reset the start a new phrase."

  return (
    <div className="helpIcon justify-content-end d-flex">
      <BsQuestionCircle onClick={() => alert(helptext)} style={{ fontSize: '40px' }}/>
      <br></br>
      <div style={{justifyContent:"left"}}>Help</div>
    
  
    </div>
  );
}
