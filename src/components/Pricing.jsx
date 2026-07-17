import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Pricing.css';

const Pricing = () => {
  const addToRefs = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        
        {/* Header */}
        <div className="pricing-header scroll-animate" ref={addToRefs}>
          <h2 className="pricing-title">
            TWO WAYS TO <span className="highlight-color">TRAIN</span>
          </h2>
          <p className="pricing-subtitle">
            MEMBERSHIP
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Card 1: Basic */}
          <div className="pricing-card standard-card scroll-animate" ref={addToRefs} style={{ transitionDelay: '0s', display: 'flex', flexDirection: 'column' }}>
            <div className="card-header">
              <h3 className="tier-name">BASIC MEMBERSHIP</h3>
            </div>
            
            <div className="price-container">
              <span className="price">₹600</span>
              <span className="price-period">/month</span>
            </div>
            
            <button className="pricing-btn outline-btn" style={{ marginTop: '1rem' }}>
              Choose Basic
            </button>
            
            <div className="divider" style={{ margin: '1.5rem 0' }} />
            
            <p style={{ color: '#ccc', textAlign: 'left', lineHeight: '1.6', fontSize: '1.05rem', flex: 1 }}>
              Full access to the gym and every piece of equipment. No personal trainer included - but you're never really on your own. New members are helped into a proper routine by the regulars and community around you from day one.
            </p>
          </div>

          {/* Card 2: Personal Training */}
          <div className="pricing-card highlighted-card scroll-animate" ref={addToRefs} style={{ transitionDelay: '0.15s', display: 'flex', flexDirection: 'column' }}>
            {/* Top Highlight Accent */}
            <div className="highlight-accent" />
            
            <div className="card-header space-between">
              <div>
                <h3 className="tier-name text-white">PERSONAL TRAINING</h3>
              </div>
              <span className="popular-badge">
                RECOMMENDED
              </span>
            </div>
            
            <div className="price-container">
              <span className="price">₹3,600</span>
              <span className="price-period" style={{ color: '#fff' }}>/month</span>
            </div>
            
            <button className="pricing-btn solid-btn" style={{ marginTop: '1rem' }}>
              Choose PT
              <ArrowRight size={16} />
            </button>
            
            <div className="divider" style={{ margin: '1.5rem 0' }} />
            
            <p style={{ color: '#fff', textAlign: 'left', lineHeight: '1.6', fontSize: '1.05rem', flex: 1 }}>
              One-on-one coaching, built from close to a decade of real training experience - programming, form correction, and a plan built around your goals.
            </p>
          </div>

        </div>
        
        {/* CTA Banner */}
        <div className="pricing-footer scroll-animate" ref={addToRefs}>
          <div className="cta-banner">
            <h3 className="cta-title">STILL NOT SURE?</h3>
            <button className="cta-btn">Get 1 free entry</button>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-section scroll-animate" ref={addToRefs} style={{ maxWidth: '800px', margin: '5rem auto 0', textAlign: 'center', backgroundColor: '#1a1a1a', padding: '3rem', borderRadius: '15px', border: '1px solid #333' }}>
          <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Ten Years in the Industry, Now Here for You</h3>
          <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' }}>
            Before I opened Magic Muscle, I worked as a personal trainer for nearly a decade, training all kinds of clients, including some recognizable names in the industry. Today, that same experience is available to every member who walks through this gate - whether you choose the basic membership or one-on-one coaching.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
