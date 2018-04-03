import React, { Component } from "react";
import logo from "./logo.svg";
import Note from "./Note";
import NewNoteForm from "./NewNoteForm";
import "./App.css";
import randomColor from "randomcolor";

const defaultNotes = [{ id: 0, text: "cats" }, { id: 1, text: "dogs" }];

class App extends Component {
  state = { notes: defaultNotes, tooManyAnimals: false };

  addNote = noteText => {
    const color = randomColor();
    const { notes } = this.state;
    const newNotes = notes.concat([
      { id: notes.length, bgColor: color, text: noteText }
    ]);
    this.setState({ notes: newNotes, tooManyAnimals: newNotes.length > 4 });
  };

  render() {
    const { notes, tooManyAnimals } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NewNoteForm onSubmit={this.addNote} />
        {tooManyAnimals && <p>Stop collecting animals!</p>}
        <div className="notes-list">
          {notes.map(note => (
            <Note key={note.id} bgColor={note.bgColor} text={note.text} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
