import React from 'react';
import { Dumbbell, Users, Target, Flame } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Classes.css';

const programs = [
  {
    id: 1,
    title: 'HEAVY IRON',
    icon: <Dumbbell size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'THE STANDARD',
    icon: <Users size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'HONEST TRAINING',
    icon: <Target size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'REAL RESULTS',
    icon: <Flame size={48} color="#fff" strokeWidth={1.5} />,
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80'
  }
];

function Classes() {
  const addToRefs = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="training" className="programs-section" style={{ padding: '80px 5%' }}>
      <div className="programs-header scroll-animate" ref={addToRefs}>
        <h2 className="programs-title">
          THE <span className="highlight-color">TRAINING</span>
        </h2>
        <p className="programs-subtitle" style={{ fontSize: '1.5rem', marginTop: '1rem', color: '#fff', textTransform: 'none', letterSpacing: 'normal' }}>Heavy Machinery. Heavier Motivation.</p>
      </div>

      <div className="training-content scroll-animate" ref={addToRefs} style={{ maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center', fontSize: '1.2rem', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p>
          Don't mistake the no-frills, no-AC setting for a lack of serious equipment - Magic Muscle is stocked with the heavy machinery a real strength program needs. But what actually gets people out of bed at 6 AM isn't the equipment. It's the energy in the room and the standard the regulars hold you to.
        </p>
      </div>

      <div className="programs-grid scroll-animate" ref={addToRefs}>
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <div 
              className="program-bg" 
              style={{ backgroundImage: `url(${program.image})` }}
            />
            <div className="program-overlay" />
            <div className="program-content">
              <div className="program-icon">
                {program.icon}
              </div>
              <h3 className="program-name">{program.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Classes;
