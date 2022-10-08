import React from 'react';
const tools = [
    {
        id: 1,
        text:"Amplify"
    },{
        id: 2, 
        text:"Increase"
    },{
        id:3,
        text:"Lower"
    },{
        id:4,
        text: "Invert"
    },{
        id:5,
        text:"Flatten"
    },{
        id:6,
        text:"Restore"
    }
]
const Tools = () => {
    return (
      <>
        <label style={{}}>
          <strong>Tools & presets</strong>
          {tools.map((tool) => (
            <button style={{ background: "skyblue" }}>{tool.text}</button>
          ))}
        </label>
      </>
    );



};

export default Tools;