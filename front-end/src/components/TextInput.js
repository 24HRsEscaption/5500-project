import Button from "./Button";

function TextInput() {

const textBoxStyles = {
  border: '1px solid black',
  width:"200px",
  height:"20px",
  padding:"1px"
  
};

  return (
    <div>
      <label>
        {/* <strong>UserInput&nbsp;&nbsp;</strong> */}
        <input
          type="text"
          name="text"
          style={textBoxStyles}
          placeholder="Type in a phrase"
        />
      </label>
  
      {/* <Button color="skyblue" onClick="generate" text="Generate" /> */}
      <Button color="lightgrey" onClick="delete" text="Delete" />
    </div>
  );
}

export default TextInput
