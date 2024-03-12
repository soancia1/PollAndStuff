import React, { useState } from 'react';
import '../style/PollCard.css';

const PollCard = ({ id, question, options, votes, isMultiSelect, onVote, onClose }) => {
  const [userVotes, setUserVotes] = useState(new Array(options.length).fill(false));

  const handleVote = (optionIndex) => {
    let updatedUserVotes = [...userVotes];

    if (isMultiSelect) {
      updatedUserVotes[optionIndex] = !updatedUserVotes[optionIndex];
    } else {
      updatedUserVotes = updatedUserVotes.map((_, index) => index === optionIndex);
    }

    setUserVotes(updatedUserVotes);
    onVote(optionIndex);
  };

  return (
    <div className="poll-card">
      <button className="close-button" onClick={() => onClose(id)}>X</button>
      <div className="poll-question">{question}</div>
      <div className="poll-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`poll-option ${userVotes[index] ? 'selected' : ''}`}
            onClick={() => handleVote(index)}
          >
            {option} <span className="vote-count">Votes: {votes[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollCard;
