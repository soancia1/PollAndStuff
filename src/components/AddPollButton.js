// AddPollButton.js
import React, { useState } from 'react';

const AddPollButton = ({ onAddPoll }) => {
  const [showForm, setShowForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPoll({ question, options: [optionOne, optionTwo] });
    setQuestion('');
    setOptionOne('');
    setOptionTwo('');
    setShowForm(false);
  };

  if (showForm) {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter poll question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option one"
          value={optionOne}
          onChange={(e) => setOptionOne(e.target.value)}
        />
        <input
          type="text"
          placeholder="Option two"
          value={optionTwo}
          onChange={(e) => setOptionTwo(e.target.value)}
        />
        <button type="submit">Add Poll</button>
      </form>
    );
  }

  return (
    <button onClick={() => setShowForm(true)}>Create New Poll</button>
  );
};

export default AddPollButton;
