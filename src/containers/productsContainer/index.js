import React, { Component } from "react";
import { connect } from "react-redux";

//Components
import ModalStatus from "../../components/ModalStatus";
import { bindActionCreators } from "redux";
import {
  getProductsList,
  getCategorysList
} from "../../reducers/ProductsReducer";
import CtrlSelect from "../../components/CtrlSelect";
import IconLoading from "../../components/Icon";
import Panel from "../../components/Panel";
import { classes } from "./containerStyles";

class ProductsContainer extends Component {
  state = {
    listProducts: []
  };

  componentDidMount() {
    this.props.getCategories();
    this.props.getProducts();
  }

  getProductsAndCategories = event => {
    const { products } = this.props;
    const { value } = event.target;
    const tmpList = [];
    //Property exists ?
    if (products.hasOwnProperty(value)) {
      for (let i in products[value]) {
        tmpList.push(products[value][i]);
      }
      this.setState({ listProducts: tmpList });
    }
  };

  render() {
    const { loading } = this.props;

    return (
      <div>
        <Panel title="Opciones" classes={classes}>
          <div>
            Categoria:{" "}
            <CtrlSelect
              options={this.props.categories}
              callback={this.getProductsAndCategories}
            />
          </div>
        </Panel>

        <ModalStatus
          active={loading}
          icon={<IconLoading active={loading} />}
          information="Cargando la lista de los productos."
        >
          <h3>Cargando Productos</h3>
        </ModalStatus>
      </div>
    );
  }
} //end class

const mapStateToProps = state => {
  return {
    products: state.actionProductsReducer.products,
    categories: state.actionProductsReducer.categories,
    loading: state.actionProductsReducer.fetching,
    message: state.actionProductsReducer.message
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getProducts: getProductsList, getCategories: getCategorysList },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
