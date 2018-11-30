import React from "react";

const __styles = {
  logo: {
    width: "50px",
    margin: "2px"
  }
};

const Logo = ({ image }) => (
  <img src={image} alt="logo" style={__styles.logo} />
);

export default Logo;
