import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Product = ({ data, children }) => {
  return (
    <div className="product">
      <div>{...data}</div>
      {children}
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};
export default Product;
