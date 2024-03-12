import React, { useState } from 'react';
import '../style/Note.css'; 

const Note = ({ id, text, onUpdate, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(id, editedText);
    setIsEditing(false);
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleDelete = () => {
    onRemove(id);
  };

  if (isEditing) {
    return (
      <div className="note" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}>
        <textarea
          className="note-edit"
          value={editedText}
          onChange={handleTextChange}
          rows={5}
        />
        <button onClick={handleSave} className="note-save">Save</button>
      </div>
    );
  }

  return (
    <div className="note" style={{ transform: `rotate(${Math.random() * 10 - 5}deg)` }}>
      <p>{text}</p>
      <button onClick={handleEdit} className="note-edit-btn">Edit</button>
      <button onClick={handleDelete} className="note-delete-btn">Delete</button>
    </div>
  );
};

export default Note;
