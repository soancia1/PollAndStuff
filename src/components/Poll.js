import React, { useState } from 'react';
import '../style/Poll.css'; // Create this CSS file for styling

function Poll() {
  const [pollQuestion, setPollQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [polls, setPolls] = useState([]);

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const submitPoll = (event) => {
    event.preventDefault();
    const newPoll = {
      question: pollQuestion,
      options: options.map(option => ({ text: option, votes: 0 })),
    };
    setPolls([...polls, newPoll]);
    setPollQuestion('');
    setOptions(['', '']);
  };

  const vote = (pollIndex, optionIndex) => {
    const newPolls = [...polls];
    newPolls[pollIndex].options[optionIndex].votes += 1;
    setPolls(newPolls);
  };

  return (
    <div className="poll-container">
      <form onSubmit={submitPoll}>
        <input
          type="text"
          placeholder="Enter poll question"
          value={pollQuestion}
          onChange={(e) => setPollQuestion(e.target.value)}
        />
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e)}
          />
        ))}
        <button type="button" onClick={addOption}>Add Option</button>
        <button type="submit">Create Poll</button>
      </form>

      {polls.map((poll, pollIndex) => (
        <div key={pollIndex} className="poll">
          <p>{poll.question}</p>
          {poll.options.map((option, optionIndex) => (
            <button key={optionIndex} onClick={() => vote(pollIndex, optionIndex)}>
              {option.text} ({option.votes})
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Poll;
