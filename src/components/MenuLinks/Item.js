import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const __styles = {
  item: {
    borderBottom: "1px solid #fff",
    marginLeft: "3px"
  },
  text: {
    color: "#fff",
    fontSize: "16px",
    textDecoration: "none",
    cursor: "pointer"
  }
};

const Item = ({ text, href, changedRute }) => {
  return (
    <li style={__styles.item}>
      <Link
        to={href.toLowerCase()}
        style={__styles.text}
        onClick={e => changedRute(text)}
      >
        {text}
      </Link>
    </li>
  );
};

Item.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};
export default Item;
