import React from 'react';
import '../style/AddNoteButton.css'; 

const AddNoteButton = ({ onAdd }) => {
  return (
    <button className="add-note-button" onClick={onAdd}>
      Add Note
    </button>
  );
};

export default AddNoteButton;
