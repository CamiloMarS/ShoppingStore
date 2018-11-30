import React from "react";

const __styles = {
  btn: {
    border: "none !important",
    borderRadius: "5px !important",
    cursor: "pointer !important",
    padding: "5px !important",
    backgroundColor: "#094fa4 !important",
    fontSize: "16px !important",
    fontWeight: "bolder !important",
    width: "150px !important",
    height: "50px !important",
    display: "flex !important",
    justifyContent: "center !important",
    alignItems: "center !important"
  }
};

const LoginButtom = ({ title, ...params }) => {
  return (
    <button
      {...params}
      style={__styles.btn}
      className="g-signin2"
      data-onsuccess="onSignIn"
    >
      {title}
    </button>
  );
};

export default LoginButtom;
