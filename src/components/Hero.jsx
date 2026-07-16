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
        YOUR BODY CAN{' '}
        <span className="scrolling-words-wrapper">
          <span className="scrolling-words-inner highlight">
            <span>ENDURE</span>
            <span>CONQUER</span>
            <span>OVERCOME</span>
            <span>MASTER</span>
            <span>WITHSTAND</span>
            <span>ENDURE</span>
          </span>
        </span>
        {' '}ANYTHING.
      </h1>
      <div className="hero-description-box">
        <p className="hero-description">
          It's your mind that needs convincing. Push past your limits, stay committed, and watch as your body transform into powerhouse of strength and resilience. Start your journey today & truly capable of!
        </p>
      </div>
      
      <div className="hero-stats">
        <div className="stat-item">
          <h3 className="stat-number"><AnimatedNumber end={1200} /></h3>
          <p className="stat-text">Active Members</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number"><AnimatedNumber end={12} /></h3>
          <p className="stat-text">Certified Trainers</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number"><AnimatedNumber end={20} /></h3>
          <p className="stat-text">Year Of Experience</p>
        </div>
      </div>

      <div className="hero-buttons">
        <button className="btn-primary">
          Get Started 
          <span className="icon-circle">↗</span>
        </button>
        <button className="btn-secondary">
          Explore More 
          <span className="icon-circle">↗</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
