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
            We believe fitness is more than just a workout - it's a lifestyle. With top-of-the-line facilities, certified trainers, and a supportive community, we're here to inspire and guide you every step of the way to becoming the strongest version of yourself.
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

      <div className="story-container scroll-animate" ref={addToRefs} style={{ maxWidth: '1152px', margin: '8rem auto 0', padding: '0 24px', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        
        <div className="story-content" style={{ flex: '1 1 500px' }}>
          <div className="about-subtitle">My Story</div>
          <h2 className="about-title" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
            TEN YEARS OF TRAINING, <span>ONE HOME</span>
          </h2>
          <div className="about-desc" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'justify', fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' }}>
            <p>I spent close to ten years as a personal trainer, working across gyms and studios with all kinds of clients, including some well-known names in the industry. I'd seen it all - the fancy equipment, the polished studios, the revolving door of clients chasing quick results.</p>
            <p>But at some point, I wanted to come home.</p>
            <p>So I came back to Kanchipuram, rented out the terrace of a building, put up a shed, and built something the fitness industry rarely makes anymore: a gym that runs on people, not on comfort.</p>
            <p>Four years later, that terrace shed is still standing - heavier on iron, heavier on community, and still run by me, the same way it started.</p>
            <p style={{ fontWeight: 'bold', marginTop: '1rem', fontSize: '1.2rem', color: '#e54b2d' }}>- Balaji</p>
          </div>
        </div>

        <div className="story-image" style={{ flex: '1 1 400px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <img 
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" 
            alt="Gym founder's story" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '500px' }} 
          />
        </div>

      </div>
    </section>
  );
}

export default About;
