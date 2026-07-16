import React from 'react';
import { Target, Activity, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

function About() {
  const addToRefs = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        <div className="about-images-wrapper scroll-animate" ref={addToRefs}>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80" 
            alt="Gym weights" 
            className="about-img-main" 
          />
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80" 
            alt="Gym member training" 
            className="about-img-secondary" 
          />
        </div>

        <div className="about-content-wrapper scroll-animate" ref={addToRefs}>
          <div className="about-subtitle">Who We Are</div>
          <h2 className="about-title">
            EMPOWERING YOU TO ACHIEVE <span>YOUR FITNESS GOALS</span>
          </h2>
          <p className="about-desc">
            We believe fitness is more than just a workout—it's a lifestyle. With top-of-the-line facilities, certified trainers, and a supportive community, we're here to inspire and guide you every step of the way to becoming the strongest version of yourself.
          </p>
          
          <div className="about-features-list">
            <div className="about-feature-item">
              <div className="about-icon-box">
                <Target size={24} />
              </div>
              <div className="about-feature-text">
                <h4>Personalized Plans</h4>
                <p>Achieve your fitness goals with custom guidance tailored specifically to you.</p>
              </div>
            </div>
            
            <div className="about-feature-item">
              <div className="about-icon-box">
                <Activity size={24} />
              </div>
              <div className="about-feature-text">
                <h4>Diverse Programs</h4>
                <p>From steady-state runs to intense interval sprints and heavy lifting.</p>
              </div>
            </div>
            
            <div className="about-feature-item">
              <div className="about-icon-box">
                <ShieldCheck size={24} />
              </div>
              <div className="about-feature-text">
                <h4>Premium Environment</h4>
                <p>Clean, modern, and equipped with the latest state-of-the-art machines.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
