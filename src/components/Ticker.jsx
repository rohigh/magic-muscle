import React from 'react';
import './Ticker.css';

function Ticker() {
  const items = [
    "PERSONAL TRAINERS", 
    "PERSONAL TRAINING", 
    "LIVE CLASSES"
  ];

  const CustomStar = () => (
    <svg 
      className="ticker-icon" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15 10L23 12L15 14L12 22L9 14L1 12L9 10L12 2Z" fill="#000000"/>
    </svg>
  );

  // Duplicate items 4 times to ensure a smooth, endless scroll loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker-content">
        {duplicatedItems.map((text, i) => (
          <div className="ticker-item" key={i}>
            {text}
            <CustomStar />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
