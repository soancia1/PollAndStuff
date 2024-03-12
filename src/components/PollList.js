import React, { useState } from 'react';
import PollCard from './PollCard';
import '../style/PollList.css'; // Ensure this path is correct based on your file structure

const PollList = () => {
  const [polls, setPolls] = useState([]);
  const [newPollQuestion, setNewPollQuestion] = useState('');
  const [newPollOptions, setNewPollOptions] = useState(['']);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const handleNewOption = () => {
    setNewPollOptions([...newPollOptions, '']);
  };

  const handleOptionChange = (value, index) => {
    const updatedOptions = [...newPollOptions];
    updatedOptions[index] = value;
    setNewPollOptions(updatedOptions);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...newPollOptions];
    updatedOptions.splice(index, 1);
    setNewPollOptions(updatedOptions);
  };

  const handleCreatePoll = () => {
    if (newPollQuestion.trim() && newPollOptions.every(option => option.trim().length > 0)) {
      const newPoll = {
        id: polls.length + 1,
        question: newPollQuestion,
        options: newPollOptions,
        votes: new Array(newPollOptions.length).fill(0),
        isMultiSelect
      };
      setPolls([...polls, newPoll]);
      setNewPollQuestion('');
      setNewPollOptions(['']);
      setIsMultiSelect(false);
    } else {
      alert('Please fill in the question and all options.');
    }
  };

  const handleVote = (pollId, optionIndex) => {
    setPolls(polls.map(poll => {
      if (poll.id === pollId) {
        const newVotes = [...poll.votes];
        if (poll.isMultiSelect) {
          newVotes[optionIndex] = newVotes[optionIndex] ? 0 : 1;
        } else {
          newVotes.fill(0);
          newVotes[optionIndex] = 1;
        }
        return { ...poll, votes: newVotes };
      }
      return poll;
    }));
  };

  const removePoll = (pollId) => {
    setPolls(polls.filter(poll => poll.id !== pollId));
  };

  return (
    <div>
      <div className="add-poll-form">
        <input
          type="text"
          placeholder="Enter poll question"
          value={newPollQuestion}
          onChange={(e) => setNewPollQuestion(e.target.value)}
        />
        {newPollOptions.map((option, index) => (
          <div key={index} className="option-input-group">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(e.target.value, index)}
            />
            {newPollOptions.length > 1 && (
              <button onClick={() => handleRemoveOption(index)}>-</button>
            )}
          </div>
        ))}
        <button onClick={handleNewOption}>Add Option</button>
        <div className="checkbox-wrapper-47">
          <input
            type="checkbox"
            id="cb-47"
            checked={isMultiSelect}
            onChange={(e) => setIsMultiSelect(e.target.checked)}
          />
          <label htmlFor="cb-47">Allow multiple selections</label>
        </div>
        <button onClick={handleCreatePoll}>Create Poll</button>
      </div>
      {polls.map((poll) => (
        <PollCard
          key={poll.id}
          id={poll.id}
          question={poll.question}
          options={poll.options}
          votes={poll.votes}
          isMultiSelect={poll.isMultiSelect}
          onVote={(optionIndex) => handleVote(poll.id, optionIndex)}
          onClose={removePoll}
        />
      ))}
    </div>
  );
};

export default PollList;
