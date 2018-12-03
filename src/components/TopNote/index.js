import React from "react";

const _styles = {
  main: {
    minWidth: "150px",
    width: "140px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "8vh",
    background: "rgb(20, 117, 136)",
    borderRadius: "0px 20px 20px 0px",
    margin: "10px !important",
    padding: "5px !important"
  },
  contentMessage: {
    padding: "10px",
    fontSize: "16px",
    color: "rgb(253, 253, 253)"
  }
};

const TopNote = ({ message }) => {
  return (
    <div style={_styles.main}>
      <div style={_styles.contentMessage}>{message}</div>
    </div>
  );
};

export default TopNote;
