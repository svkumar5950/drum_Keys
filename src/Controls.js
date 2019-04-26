import React from "react";

const Controls = props => {
  return (
    <div className="app-controls">
      <h2>
        Power
        <label className="switch">
          <input type="checkbox" onChange={props.handlePower} />
          <span className="slider" />
        </label>
      </h2>

      <h2>
        Change Pattern
        <label className="switch">
          <input type="checkbox" onChange={props.handleChange} />
          <span className="slider" />
        </label>
      </h2>
      <h2 className="app-volume-slider">
        Control Volume
        <label>
          <input type="range" onChange={e => props.handleRange(e)} />
        </label>
      </h2>
      <h2 className="app-displayTracks">
        Track
        <label>
          <input
            type="text"
            readOnly
            value={props.msg ? props.handleDisplay : "Power Off"}
            placeholder={props.msg ? "Track Name.." : "Power Off"}
          />
        </label>
      </h2>
    </div>
  );
};
export default Controls;
