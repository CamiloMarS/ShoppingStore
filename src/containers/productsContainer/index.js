import React, { Component } from "react";
import { connect } from "react-redux";

//Components

class ProductsContainer extends Component {
  render() {
    return (
      <div>
        <p>Cargando productos</p>
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
