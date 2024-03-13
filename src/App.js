import React from 'react';
import PollList from './components/PollList';
import './App.css'; // Ensure this file contains the new styles
import StickyNotesApp from './components/StickyNotesApp';

const App = () => {
  return (
    <div className="main-container">
      <div className="polls-section">
        <PollList />
      </div>
      <div className="sticky-notes-section">
        <StickyNotesApp />
      </div>
    </div>
  );
};

export default App;
