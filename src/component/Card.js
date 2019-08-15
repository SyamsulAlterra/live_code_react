import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { actions } from "./Store";
import { connect } from "unistore/react";
import { Link, withRouter } from "react-router-dom";
const axios = require("axios");

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = async () => {
    console.log(this.props.cat);
    this.props.setCategory(this.props.cat);
    let url = "https://api-todofancy.herokuapp.com/api/movies";
    await axios.get(url).then(response => {
      console.log(response);
      let relevantMovie = response.data.movies.filter(movie => {
        return movie.Category == this.props.cat;
      });
      this.props.setMovie(relevantMovie);
    });
    this.props.history.push("/category");
  };

  render() {
    return (
      <div class="card">
        <h3>{this.props.cat}</h3>
        <div>
          <img src={this.props.url} alt="" />
        </div>
        <button class="primary-button" onClick={this.handleClick}>
          See Movies
        </button>
      </div>
    );
  }
}

export default connect(
  "username, email, status, password,category, listMovie",
  actions
)(withRouter(Card));
