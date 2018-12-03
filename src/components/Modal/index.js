import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import TopNote from "../TopNote";

const Modal = ({ title, children }) => {
  return (
    <div className="divFullScreen">
      <div className="divBodyModal">
        <div className="titleModal">
          <h2>{title}</h2>
        </div>
        <div className="contentBody">
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <TopNote message="algun mensaje para poner aquí" />
            <img
              style={{ width: "150px", height: "150px", margin: "10px" }}
              src="#"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};
export default Modal;
