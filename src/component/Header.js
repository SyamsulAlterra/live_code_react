import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { actions } from "./Store";
import { connect } from "unistore/react";
import MenuHeader from "./MenuHeader";
import logo from "../logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.object == "kotak merah") {
      this.props.setObject("kotak hitam");
    } else {
      this.props.setObject("kotak merah");
    }
  };

  render() {
    return (
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-1">
              <img src={logo} alt="" />
            </div>
            <div class="col-11">
              <MenuHeader />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "",
  actions
)(Header);
