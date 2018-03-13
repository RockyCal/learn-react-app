import React, { Component } from "react";
import PropTypes from "prop-types";

class NewNoteForm extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {},
    onSubmit: () => {}
  };

  render() {
    const { onChange, onSubmit } = this.props;
    return (
      <div
        style={{
          padding: "20px",
          marginBottom: "30px",
          backgroundColor: "#CEF0A6"
        }}
      >
        <input id="new-note" type="text" onChange={onChange} style={{ marginRight: "10px" }}/>
        <button onClick={onSubmit}>{"Add note"}</button>
      </div>
    );
  }
}

export default NewNoteForm;
