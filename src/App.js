import React, { Component } from "react";
import logo from "./logo.svg";
import Note from "./Note";
import NewNoteForm from './NewNoteForm';
import "./App.css";

const defaultNotes = [{ id: 0, text: "cats" }, { id: 1, text: "dogs" }];

class App extends Component {
  state = { notes: defaultNotes, inputValue: '' };

  changeNewNoteValue(e) {
    const { notes } = this.state
    const newNoteValue = e.target.value;
    this.setState({ notes, inputValue: newNoteValue })
  }

  addNote() {
    const { notes, inputValue } = this.state;
    const newNotes = notes.concat([
      { id: notes.length, text: inputValue }
    ]);
    this.setState({ notes: newNotes, inputValue });
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NewNoteForm onChange={this.changeNewNoteValue.bind(this)} onSubmit={this.addNote.bind(this)}/>
        <div className="notes-list">{notes.map(note => <Note key={note.id} text={note.text} />)}</div>
      </div>
    );
  }
}

export default App;
