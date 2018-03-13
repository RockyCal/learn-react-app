import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: ""
  };

  render() {
    const { text } = this.props;
    return (
      <div
        style={{
          border: "solid",
          borderColor: "black",
          borderWidth: "1px",
          marginBottom: "10px",
          width: "500px"
        }}
      >
        <p>{text}</p>
      </div>
    );
  }
}

export { Note };
export default Note;
