import React from "react";
import Button from "../Button";
import classes from "./styles.js";

class LoginForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.txtUserName = React.createRef();
    this.txtUserPassword = React.createRef();
  }

  getDataFromInputs = () => {
    const { txtUserName, txtUserPassword } = this;
    this.props.getUserData({
      user: txtUserName.current.value,
      password: txtUserPassword.current.value
    });
    txtUserName.current.value = "";
    txtUserPassword.current.value = "";
  };

  render() {
    return (
      <div style={classes.content}>
        <h3 style={classes.title}>Iniciar sessión</h3>
        <Button color="red" text="Gmail" action={null} />
        <Button color="blue" text="Facebook" action={null} />

        <div style={{ borderTop: "1px groove #000", paddingTop: "10px" }}>
          <span style={classes.txtControls}>Usuario</span>
          <input
            style={classes.inputs}
            type="text"
            placeholder="Orlando Blom"
            ref={this.txtUserName}
          />
          <span style={classes.txtControls}>Contraseña</span>
          <input
            style={classes.inputs}
            type="password"
            placeholder="*******"
            ref={this.txtUserPassword}
          />
        </div>
        <Button color="green" text="Login" action={this.getDataFromInputs} />
      </div>
    );
  }
}

export default LoginForm;
