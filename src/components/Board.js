import React, { useState } from "react";
import Note from "./Note";
import AddNoteButton from "./AddNoteButton";
import "../style/Board.css";

const Board = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const newNote = {
      id: Date.now(),
      text: text || "New note",
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="board">
      <AddNoteButton onAdd={() => addNote()} />
      <div class="should-flex">
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            onUpdate={updateNote}
            onRemove={removeNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
