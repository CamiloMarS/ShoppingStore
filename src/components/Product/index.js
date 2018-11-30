import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Product = ({ data, children }) => {
  return (
    <div className="product">
      <div>
        <div>
          <img src={data.image} alt={data.name} />
        </div>
        <div>
          <h4>{data.name}</h4>
          <span>{data.mark}</span>
          <span>{data.cost}</span>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};
export default Product;

/**
 *  Product = {
 *   name: "",
 *   cost: 0,
 *   mark: "",
 *   category: LMPA08,
 *   description: "",
 *   caducidad: "",
 *   image: ["","",""]
 * }
 *
 */
