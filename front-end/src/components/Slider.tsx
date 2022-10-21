import { Range } from "react-range";
import * as React from "react";

const trackStyles = {
  display: "inline-block",
  height: "6px",
  width: "80%",
  marginLeft: "100px",
  verticalAlign: "middle",
  backgroundColor: "#ccc",
};
const thumbStyles = {
  backgroundColor: "skyblue",
  height: "10px",
  width: "10px",
};
const textStyles = {
  fontSize: "20px",
  display: "inline-block",
  marginLeft: "100px",
  verticalAlign: "middle",
};
const dataStyles = {
  fontSize: "20px",
  display: "inline-block",
  marginLeft: "20px",
  verticalAlign: "middle",
};

class Slider extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = { values: [1] };
  }



  render() {
    return (
      <div>
        <label>
          <div style={textStyles}>
            <strong>{this.props.name}&nbsp;&nbsp; </strong>
          </div>
          <Range
            step={0.1}
            min={0.1}
            max={2}
            values={this.state.values}
            onChange={(values) => this.setState({ values })}
            renderTrack={({ props, children }) => (
              <div {...props} style={trackStyles}>
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={thumbStyles}
              />
            )}
          />
       
          <span className="value" style={dataStyles}>
            {this.state.values}x
          </span>
        </label>
      </div>
    );
  }
}

export default Slider