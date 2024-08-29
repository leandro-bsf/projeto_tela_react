import React from 'react';
import './SwitchToggle.css';

const SwitchToggle = ({ id, isOn, handleToggle }) => {
  return (
    <div className="switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id} 
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={id} 
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default SwitchToggle;
