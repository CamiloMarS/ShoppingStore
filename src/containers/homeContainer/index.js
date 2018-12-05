import React, { Component } from "react";

//Components
//import LoginButtom from "../../components/LoginButton";
import Modal from "../../components/Modal";
import LoginForm from "../../components/FormLogin";
import { watchSession, singInWithEmailAndPass } from "../../settings/firebase";

class HomeContainer extends Component {
  state = {
    logged: false
  };

  getDataUserLogged = object => {
    const { user, password } = object;
    //Login
    try {
      singInWithEmailAndPass(user, password);
      //this.setState({ logged: true });
    } catch (err) {
      console.log("Login => ", err);
    }
    watchSession();
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
    return <div>{this.showHiddeModal()}</div>;
  }
}

export default HomeContainer;
