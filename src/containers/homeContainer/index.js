import React, { Component } from "react";
import { connect } from "react-redux";

//Components
//import LoginButtom from "../../components/LoginButton";
import Modal from "../../components/Modal";
import LoginForm from "../../components/FormLogin";
import CtrlSelect from "../../components/CtrlSelect";

class HomeContainer extends Component {
  state = {
    logged: true
  };

  getDataUserLogged = object => {
    console.log(object);
  };

  showHiddeModal = () => {
    const { logged } = this.state;
    if (logged) {
      return <p>Bienvenido</p>;
    }
    return (
      <Modal title="Shopping Store">
        <LoginForm getUserData={this.getDataUserLogged} />
      </Modal>
    );
  };

  render() {
    console.log(this.props);
    return <div>{this.showHiddeModal()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    list: state.productsReducer.categories
  };
};

export default connect(mapStateToProps)(HomeContainer);
