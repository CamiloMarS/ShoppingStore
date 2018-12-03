import React from "react";

const colors = {
  red: "#DF0101",
  blue: "#2E9AFE",
  green: "#31B404",
  gray: "#D8D8D8"
};

const Button = ({ color, text, action }) => {
  return (
    <button
      style={{
        backgroundColor: `${colors[color]}`,
        border: "none",
        height: "5vh",
        margin: "5px",
        padding: "5px",
        width: "70%",
        fontSize: "16px",
        color: "#fff",
        fontWeight: "bolder",
        textShadow: "0px 0px 2px #000",
        boxShadow: "1px 1px 0px #fff"
      }}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
