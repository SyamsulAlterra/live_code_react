import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { Link, Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../component/Store";
import Card from "../component/Card";
import Header from "../component/Header";
import CardCategory from "../component/CardCategory";
const axios = require("axios");

class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.category);
    console.log("tes");
    return (
      <div class="category">
        <Header />
        {this.props.listMovie.map(movie => {
          return (
            <CardCategory
              poster={movie.Poster}
              title={movie.Title}
              syn={movie.Synopsis}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  "username, email, status, password,category, listMovie",
  actions
)(withRouter(Category));
