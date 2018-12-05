import React from "react";

const css = {
  panel: {
    background: "rgba(123,233,233,.6)"
  }
};

const Panel = ({ title, children, classes }) => {
  return (
    <div style={classes.container}>
      <div style={classes.title}>
        <h3>{title}</h3>
      </div>
      <div style={classes.body}>{children}</div>
    </div>
  );
};

export default Panel;
