import React from "react";

function Autoplay() {
  return (
    <div>
      <label className="switch">
        <strong>Autoplay&nbsp;&nbsp; </strong>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Autoplay;
