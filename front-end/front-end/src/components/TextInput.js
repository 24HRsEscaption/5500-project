import Button from "./Button";

function TextInput() {


  const onClick = ()=>{
      console.log("clicked button -> Generate");}


  return (
    <div>
      <label>
        <strong>Utterance&nbsp;&nbsp;</strong>
        <input type="text" name="text" placeholder="Type in a phrase" />
      </label>
      <Button
        style={{ background: "skyblue" }}
        onClick={onClick}
        text="Generate"
      />
    </div>
  );
}

export default TextInput
