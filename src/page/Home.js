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
      <div class="home">
        <Header />
        <div class="container">
          <div class="row">
            <div class="col-3">
              <Card
                cat="romance"
                url="https://m.media-amazon.com/images/M/MV5BOWJhMjJjMDItODQxYS00ODIyLWJhYzAtNTliMDhkZjM0YTA1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
              />
            </div>
            <div class="col-3">
              <Card
                cat="action"
                url="https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
              />
            </div>
            <div class="col-3">
              <Card
                cat="fiction"
                url="https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg"
              />
            </div>
            <div class="col-3">
              <Card
                cat="comedy"
                url="https://m.media-amazon.com/images/M/MV5BNTAyNDM0OGMtMmQ5OS00OGJiLTljMDUtY2Y1OTFlYmM2ZTk2XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "username, email, status, password",
  actions
)(withRouter(Home));
