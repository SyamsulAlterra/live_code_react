import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../component/Store";
import logo from "../logo.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin = () => {
    this.props.toggleStatus(true);
    this.props.history.push("/home");
  };

  renderRedirect = () => {
    if (this.state.status === "true") {
      return <Redirect to="/home" />;
    }
  };

  handleUsername = e => {
    const user = e.target.value;
    this.props.setUsername(user);
  };

  handleEmail = e => {
    const email = e.target.value;
    this.props.setEmail(email);
  };

  handlePassword = e => {
    const pass = e.target.value;
    this.props.setPassword(pass);
  };

  render() {
    console.log(this.props.username);
    console.log(this.props.email);
    console.log(this.props.password);
    console.log(this.props.status);

    return (
      <div class="login">
        {/* {this.renderRedirect()} */}
        <div class="box border">
          <img src={logo} /> <br />
          <label for="username">Username:</label> <br />
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleUsername}
          />
          <br />
          <label for="email">Email:</label> <br />
          <input
            type="text"
            name="email"
            id="email"
            onChange={this.handleEmail}
          />
          <br />
          <label for="password">Password:</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handlePassword}
          />
          <br />
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, email, status, password",
  actions
)(withRouter(Login));
