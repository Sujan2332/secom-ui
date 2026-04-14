import React from "react";

const Button = ({ children }) => {
  console.log("Button rendered"); // 👈 add this
  return (
    <button style={{ background: "red", color: "white" }}>
      {children}
    </button>
  );
};

export default Button;