import React, { Component } from "react";

class MyProductsContainer extends Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    return (
      <div>
        <h1>My products</h1>
      </div>
    );
  }
}

export default MyProductsContainer;
