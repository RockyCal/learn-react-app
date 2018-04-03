import React, { Component } from "react";
import PropTypes from "prop-types";

class Note extends Component {
  static propTypes = {
    bgColor: PropTypes.string,
    text: PropTypes.string
  };

  static defaultProps = {
    bgColor: '#FFFFFF',
    text: ""
  };

  render() {
    const { bgColor, text } = this.props;
    return (
      <div
        style={{
          border: "solid",
          borderColor: "black",
          borderWidth: "1px",
          marginBottom: "10px",
          width: "500px",
          backgroundColor: bgColor
        }}
      >
        <p>{text}</p>
      </div>
    );
  }
}

export { Note };
export default Note;
