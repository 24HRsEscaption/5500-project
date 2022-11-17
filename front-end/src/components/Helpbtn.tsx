import * as React from "react";
// import Button from "@mui/material/Button";
// import HelpIcon from "@mui/icons-material/Help";
import {BsQuestionCircle} from "react-icons/bs";



export default function Helpbtn() {
  const btnStyle1 = {
    display: "block",
    fontSize: "15px",
    marginLeft: "900px",
    verticalAlign: "middle",
  };


const helptext="Hello User.\n1. Type in a phrase and modify the /SPEED/PITCH/ENERGY. \n2. Click Generate. \n3. Click the play button for the audio.\n4. Click reset the start a new phrase."

  return (
    <div className="helpIcon" style={btnStyle1}>
      {/* <Button
        style={btnStyle1}
        variant="outlined"
        endIcon={<HelpIcon color="info" />}
        onClick={() => alert(helptext)}
      >
        HELP
      </Button> */}
      <BsQuestionCircle onClick={() => alert(helptext)} style={{ fontSize: '40px' }}/>
      <br></br>
      <div style={{justifyContent:"left"}}>Help</div>
    
  
    </div>
  );
}
