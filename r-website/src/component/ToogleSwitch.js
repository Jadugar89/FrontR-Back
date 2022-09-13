import React from 'react';
import "../css/ToggleSwitch.css";
  
const ToggleSwitch = (props) => {

  return (
    <div className="container">
      {props.label}{" "}
      <div className="toggle-switch">
        <input type="checkbox" disabled={props.disabled} onChange={props.OnChangeHandler}  className="checkbox" 
                name ="label" id="label"
                />
        <label className="label" htmlFor="label">
          <span className="inner" />
          <span className="switch"/>
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;