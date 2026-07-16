import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        
        {/* Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">
            IT'S YOUR TIME TO <span className="highlight-color">STRIKE!</span>
          </h2>
          <p className="pricing-subtitle">
            MEMBERSHIP PLANS
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          
          {/* Card 1: Annual */}
          <div className="pricing-card standard-card">
            <div className="card-header">
              <h3 className="tier-name">ANNUAL</h3>
              <p className="tier-desc">Long-term commitment for the best value.</p>
            </div>
            
            <div className="price-container">
              <span className="price">₹1833</span>
              <span className="price-period">/m</span>
            </div>
            <p className="billing-subtext">PAID ANNUALLY</p>
            
            <button className="pricing-btn outline-btn">
              Choose Annual
            </button>
            
            <div className="divider" />
            
            <ul className="feature-list">
              {[
                "Complete Gym Access", 
                "Women's Zone", 
                "Recovery Equipments", 
                "Personalized Workout Plan", 
                "12 Free Recovery Sessions"
              ].map((feature, i) => (
                <li key={i} className="feature-item">
                  <Check className="feature-icon text-muted" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Semi Annual (Highlighted) */}
          <div className="pricing-card highlighted-card">
            {/* Top Highlight Accent */}
            <div className="highlight-accent" />
            
            <div className="card-header space-between">
              <div>
                <h3 className="tier-name text-white">SEMI ANNUAL</h3>
                <p className="tier-desc">Perfect balance of value and flexibility.</p>
              </div>
              <span className="popular-badge">
                MOST POPULAR
              </span>
            </div>
            
            <div className="price-container">
              <span className="price">₹11,999</span>
            </div>
            <p className="billing-subtext">TOTAL FOR 6 MONTHS</p>
            
            <button className="pricing-btn solid-btn">
              Choose 6 Months
              <ArrowRight size={16} />
            </button>
            
            <div className="divider" />
            
            <ul className="feature-list">
              {[
                "Complete Gym Access", 
                "Women's Zone", 
                "Recovery Equipments", 
                "Regular Fitness Analysis", 
                "Guidance to reach goals", 
                "6 Free Recovery Sessions"
              ].map((feature, i) => (
                <li key={i} className="feature-item text-white">
                  <Check className="feature-icon text-white" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Group */}
          <div className="pricing-card standard-card">
            <div className="card-header">
              <h3 className="tier-name">GROUP</h3>
              <p className="tier-desc">Train together, achieve together.</p>
            </div>
            
            <div className="price-container">
              <span className="price">₹5999</span>
            </div>
            <p className="billing-subtext">PER MONTH ONWARDS</p>
            
            <button className="pricing-btn outline-btn">
              Choose Group
            </button>
            
            <div className="divider" />
            
            <ul className="feature-list">
              {[
                "12 Sessions", 
                "Group Fitness Training", 
                "Gym Membership Exempt", 
                "Personalized Workout Plan"
              ].map((feature, i) => (
                <li key={i} className="feature-item">
                  <Check className="feature-icon text-muted" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
        {/* Footer Notes */}
        <div className="pricing-footer">
          <p className="gst-note">*Prices mentioned are exclusive of GST.</p>
          <div className="cta-banner">
            <h3 className="cta-title">STILL NOT SURE?</h3>
            <button className="cta-btn">Get 1 free entry</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
