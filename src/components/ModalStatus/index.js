import React from "react";
import "../Modal/styles.css";

const ModalStatus = ({ active, icon, information, children }) => {
  if (active) {
    return (
      <div className="divFullScreen">
        <div
          style={{
            width: 250,
            height: 350,
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          {children}
          {icon}
          <div style={{ width: "80%", textAlign: "center" }}>{information}</div>
        </div>
      </div>
    );
  }
  return <span />;
};

export default ModalStatus;
