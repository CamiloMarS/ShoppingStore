import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import Products from "../../components/Product";

class ProductsContainer extends Component {
  render() {
    return (
      <div>
        <Products
          data={{ image: "#", name: "Sudadera", mark: "Ferrato", cost: 500 }}
        >
          <p>Product</p>
        </Products>
      </div>
    );
  }
} //end class

const mapStateToProps = state => {
  return {
    productList: state.productsReducer.products,
    loadingProducts: state.productsReducer.fetching,
    messageProducts: state.productsReducer.message
  };
};

export default connect(mapStateToProps)(ProductsContainer);
