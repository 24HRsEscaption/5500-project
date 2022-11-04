import * as React from "react";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";


export default function Helpbtn() {
  const btnStyle1 = {
    display: "inline",
    fontSize: "20px",
    marginTop:"10px",
    marginLeft: "700px",
    verticalAlign: "middle",
  };


const helptext="Hello User.\n1. Type in a phrase and modify the /SPEED/PITCH/ENERGY. \n2. Click Generate. \n3. Click the play button for the audio.\n4. Click reset the start a new phrase."

  return (
    <div>
      <Button
        style={btnStyle1}
        variant="outlined"
        endIcon={<HelpIcon color="info" />}
        onClick={() => alert(helptext)}
      >
        HELP
      </Button>
    </div>
  );
}
