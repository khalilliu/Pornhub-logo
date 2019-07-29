import React from "react";

const Input = ({ type, dataType, value, onChange, ...props }) => {
  switch (type) {
    case "checkbox":
      return (
        <input
          type={type}
          onChange={e => {
            onChange(e.target.checked, dataType);
          }}
          checked={value}
          {...props}
        />
      );
    default:
      return (
        <input
          type={type}
          onChange={e => {
            onChange(e.target.value, dataType);
          }}
          value={value}
          {...props}
        />
      );
  }
};

export default Input;
