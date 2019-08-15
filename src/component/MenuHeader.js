import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "./Store";
const axios = require("axios");

class MenuHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { category: "", status: "" };
  }

  signout = () => {
    this.props.toggleStatus(false);
    // this.setState({ status: "false" }, () => {
    // });
  };

  renderRedirect = () => {
    if (this.props.status === false) {
      return <Redirect to="/login" />;
    }
  };

  render() {
    return (
      <div className="menu-header">
        {this.renderRedirect()}
        <table className="table-center">
          <tbody>
            <tr className="align-center">
              <td className="menu-item-list">
                <Link to="/home" onClick={this.sepakBola}>
                  Home
                </Link>
              </td>
              <td className="menu-item-list">
                <Link to="/profil">Profil</Link>
              </td>
              <td className="menu-item-list" onClick={this.signout}>
                Sign out
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  "username, email, status, password",
  actions
)(withRouter(MenuHeader));
