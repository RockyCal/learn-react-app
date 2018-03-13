import React, { Component } from "react";
import logo from "./logo.svg";
import Note from "./Note";
import "./App.css";

const defaultNotes = [{ id: 0, text: "cats" }, { id: 1, text: "dogs" }];

class App extends Component {
  state = { notes: defaultNotes };

  changeNewNoteValue(e) {
    this.newNoteValue = e.target.value;
  }

  addNote() {
    const { notes } = this.state;
    const newNotes = notes.concat([
      { id: notes.length, text: this.newNoteValue }
    ]);
    this.setState({ notes: newNotes });
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input
          id="new-note"
          type="text"
          onChange={this.changeNewNoteValue.bind(this)}
        />
        <button onClick={this.addNote.bind(this)}>{"Add note"}</button>
        <div className="notes-list">{notes.map(note => <Note key={note.id} text={note.text} />)}</div>
      </div>
    );
  }
}

export default App;
