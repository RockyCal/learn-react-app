import React, { Component } from "react";
import PropTypes from "prop-types";

class NewNoteForm extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  static defaultProps = {
    onChange: () => {}
  };

  render() {
    const { onChange } = this.props;
    return (
      <input
        id="new-note"
        type="text"
        onChange={onChange}
      />
    );
  }
}

export default NewNoteForm;
