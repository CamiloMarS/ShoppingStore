import React from "react";
import PropTypes from "prop-types";
import classes from "./styles";

const HeaderApp = ({ logo, children }) => {
  return (
    <div style={classes.header}>
      <div style={classes.divLogo}>{logo}</div>
      <div style={classes.divChildren}>{children}</div>
    </div>
  );
};

HeaderApp.propTypes = {
  logo: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired
};

export default HeaderApp;
