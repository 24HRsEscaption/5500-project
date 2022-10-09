import { Range } from "react-range";
import * as React from "react";
class Slider extends React.Component {
  state = { values: [1] };
  render() {
    return (
      <div>
        <label>
          <div style={{ display: "inline-block" }}>
        
            <strong>{this.props.name}&nbsp;&nbsp; </strong>
          </div>
          <Range
            step={0.1}
            min={0.1}
            max={2}
            values={this.state.values}
            onChange={(values) => this.setState({ values })}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  display: "inline-block",
                  height: "6px",
                  width: "10%",

                  backgroundColor: "#ccc",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "10px",
                  width: "10px",
                  backgroundColor: "#999",
                }}
              />
            )}
          />
          &nbsp;&nbsp;{this.state.values}&nbsp;x
        </label>
      </div>
    );
  }
}

export default Slider