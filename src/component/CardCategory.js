import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { actions } from "./Store";
import { connect } from "unistore/react";
import { Link, withRouter } from "react-router-dom";
const axios = require("axios");

class CardCategory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="cardCategory">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <img src={this.props.poster} alt="" />
            </div>
            <div class="col-8 border">
              <h3>{this.props.title}</h3>
              <p>{this.props.syn}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, email, status, password,category, listMovie",
  actions
)(withRouter(CardCategory));
