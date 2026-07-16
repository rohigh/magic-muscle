import React, { useState, useEffect } from 'react';
import { Dumbbell, Users, Activity, Heart, Flame, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Features.css';

const featureList = [
  {
    icon: <Dumbbell size={36} color="#e54b2d" />,
    title: 'MODERN GYMS',
    desc: 'Modern and clean equipment. For the best workout experience possible.'
  },
  {
    icon: <Users size={36} color="#e54b2d" />,
    title: 'PRO TEAM',
    desc: 'Our coaches are experts in their field. Ready to help you achieve your goals.'
  },
  {
    icon: <Activity size={36} color="#e54b2d" />,
    title: 'GROUP LESSONS',
    desc: 'Experience the energy of a group session. Every single day in a week.'
  },
  {
    icon: <Heart size={36} color="#e54b2d" />,
    title: "WOMEN'S SECTION",
    desc: 'Your comfort is our priority. Women only section in our gym.'
  },
  {
    icon: <Flame size={36} color="#e54b2d" />,
    title: 'CROSSFIT',
    desc: 'CrossFit in our gym is with all the equipment needed.'
  },
  {
    icon: <Clock size={36} color="#e54b2d" />,
    title: 'OPEN ALL DAY',
    desc: 'Open 24/7. 7 Days a Week.'
  }
];

const images = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80'
];

function Features() {
  const [currentImage, setCurrentImage] = useState(0);
  const addToRefs = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="why-choose-us-section">
      <h2 className="why-title scroll-animate" ref={addToRefs}>WHY CHOOSE <span className="highlight-color">US?</span></h2>
      
      <div className="why-container">
        <div className="why-image-wrapper scroll-animate" ref={addToRefs}>
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt="Gym Facility" 
              className={`why-image ${idx === currentImage ? 'active' : ''}`}
            />
          ))}
        </div>
        
        <div className="why-features-grid">
          {featureList.map((feat, idx) => (
            <div key={idx} className="why-feature-card scroll-animate" ref={addToRefs} style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className="why-icon">{feat.icon}</div>
              <h3 className="why-card-title">{feat.title}</h3>
              <p className="why-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
