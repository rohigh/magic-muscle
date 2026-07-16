import React from 'react';
import { Star } from 'lucide-react';

function Ticker() {
  // Duplicate items to ensure smooth infinite scrolling
  const items = [
    "Personal Trainers", "Live Classes", "Strength & Conditioning", "Cardio Burn",
    "Nutrition Plans", "Yoga & Pilates", "24/7 Access", "Premium Equipment"
  ];

  return (
    <div className="ticker-wrap">
      <div className="ticker-content">
        {[...items, ...items, ...items].map((text, i) => (
          <div className="ticker-item" key={i}>
            <Star className="ticker-icon" size={24} fill="currentColor" />
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
