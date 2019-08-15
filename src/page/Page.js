import React from "react";
import { connect } from "unistore/react";
import { actions } from "../component/Store";
import "../css/style.css";
import "../css/bootstrap.min.css";
import KotakBulet from "../component/KotakBulet";

class Page extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12 align-center">
            <KotakBulet />
            <h1>{this.props.object}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "object",
  actions
)(Page);
