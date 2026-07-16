import React from 'react';
import { Activity, Dumbbell, Bike, Heart } from 'lucide-react';
import './Classes.css';

const programs = [
  {
    id: 1,
    title: 'CrossFit',
    icon: <Activity size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'STRENGTH',
    icon: <Dumbbell size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'CARDIO',
    icon: <Bike size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'LIFESTYLE',
    icon: <Heart size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
  }
];

function Classes() {
  return (
    <section id="programs" className="programs-section">
      <div className="programs-header">
        <h2 className="programs-title">
          TOGETHER WE <span className="highlight-color">ACHIEVE!</span>
        </h2>
        <p className="programs-subtitle">PROGRAMS</p>
      </div>

      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div 
              className="program-bg" 
              style={{ backgroundImage: `url(${program.image})` }}
            ></div>
            <div className="program-overlay"></div>
            <div className="program-content">
              <div className="program-icon">{program.icon}</div>
              <h3 className="program-name">{program.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
