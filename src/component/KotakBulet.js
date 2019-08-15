import React from "react";
import "../css/style.css";
import "../css/bootstrap.min.css";
import { actions } from "./Store";
import { connect } from "unistore/react";

class KotakBulet extends React.Component {
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
    console.log(this.props.object);
    if (this.props.object == "kotak hitam") {
      return (
        <div className="kotak border margin-center">
          <div className="bulet" onClick={this.handleClick} />
        </div>
      );
    } else {
      return (
        <div className="kotak border margin-center">
          <div className="bulet merah" onClick={this.handleClick} />
        </div>
      );
    }
  }
}

export default connect(
  "object",
  actions
)(KotakBulet);
