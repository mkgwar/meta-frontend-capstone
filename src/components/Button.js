import React from "react";
import "../styles/Button.css";

const Button = ({ children, ...props }) => {
  return (
    <button data-testid="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
