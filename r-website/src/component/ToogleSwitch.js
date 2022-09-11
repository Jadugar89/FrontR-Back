import React from 'react';
import "../css/ToggleSwitch.css";
  
const ToggleSwitch = (props) => {
  let vLabel;

  if(props.checked)
  {
    vLabel =props.labelSelected;
  }
  else
  {
    vLabel =props.labelUnselected;
  }
  return (
    <div className="container">
      {vLabel}{" "}
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