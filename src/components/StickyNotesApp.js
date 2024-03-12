import React from 'react';
import PollList from './PollList'; 
import Board from './Board';
import '../style/StickyNotesApp.css'; 

const StickyNotesApp = () => {
  return (
    <div className="sticky-notes-app-container">
    {/* //   <div className="polls-section">
    //     <PollList />
    //   </div> */}
      <div className="sticky-notes-section">
        <Board count={10} />
      </div>
    </div>
  );
};

export default StickyNotesApp;
