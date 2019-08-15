import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../component/Store";
import Card from "../component/Card";
import Header from "../component/Header";
const axios = require("axios");

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="profil">
        <Header />
        <span>username: </span>
        <span>{this.props.username}</span> <br />
        <span>email: </span>
        <span>{this.props.email}</span>
      </div>
    );
  }
}

export default connect(
  "username, email, status, password",
  actions
)(withRouter(Home));
