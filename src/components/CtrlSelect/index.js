import React from "react";

const CtrlSelect = ({ options }) => {
  return (
    <select>
      <option value="0">Selected</option>
      {options.map(option => (
        <option value={option.id}>{option.name}</option>
      ))}
    </select>
  );
};

export default CtrlSelect;
