import React, { useState, useEffect } from 'react';
import './Hero.css';

const AnimatedNumber = ({ end, duration = 2000, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutExpo for a smooth slowdown at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

function Hero() {
  return (
    <div className="hero-content">
      <h1 className="hero-heading">
        WHERE EVERYONE LIFTS <span className="highlight">TOGETHER</span>
      </h1>
      <div className="hero-description-box">
        <p className="hero-description">
          A terrace gym in Kanchipuram where a decade of real training experience, heavy iron, and a room full of people who show up for each other will get you off the couch - every single morning.
        </p>
      </div>
      
      <div className="hero-stats">
        <div className="stat-item">
          <h3 className="stat-number"><AnimatedNumber end={100} /></h3>
          <p className="stat-text">Active Members</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number"><AnimatedNumber end={10} /></h3>
          <p className="stat-text">Years Of Experience</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number"><AnimatedNumber end={4} /></h3>
          <p className="stat-text">Years at this Location</p>
        </div>
      </div>

      <div className="hero-buttons">
        <a 
          href="https://www.google.com/maps/dir//Muscle+Magic+(Unisex+Fitness+Centre),+SH4+Second+Floor,+Vandavasi+Main+Road,+opp.+SP+Bangalow,+near+Collector+office,+Kanchipuram,+Tamil+Nadu+631501/@13.090816,80.2226176,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52c34f9dbdb023:0xa47e863badccfdfe!2m2!1d79.6962344!2d12.8202925?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
          style={{ textDecoration: 'none' }}
        >
          Visit Us 
          <span className="icon-circle">↗</span>
        </a>
        <a 
          href="https://wa.me/918667626438?text=Hi!%20I%20would%20like%20to%20book%20a%20free%20trial%20session."
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary"
          style={{ textDecoration: 'none' }}
        >
          Book a Trial Session
          <span className="icon-circle">↗</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
