import React, { Component } from "react";
import PropTypes from "prop-types";

class NewNoteForm extends Component {
  inputEl = "";

  static propTypes = {
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onSubmit: () => {}
  };

  render() {
    const { onSubmit } = this.props;

    return (
      <div
        style={{
          padding: "20px",
          marginBottom: "30px",
          backgroundColor: "#CEF0A6"
        }}
      >
        <input
          id="new-note"
          type="text"
          style={{ marginRight: "10px" }}
          ref={el => (this.inputEl = el)}
        />
        <button onClick={() => onSubmit(this.inputEl.value)}>{"Add note"}</button>
      </div>
    );
  }
}

export default NewNoteForm;
