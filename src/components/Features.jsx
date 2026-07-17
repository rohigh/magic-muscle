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
    <section id="community" className="why-choose-us-section" style={{ padding: '80px 5%' }}>
      <h2 className="why-title scroll-animate" ref={addToRefs}>THE <span className="highlight-color">COMMUNITY</span></h2>
      
      <div className="why-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
        <div className="why-image-wrapper scroll-animate" ref={addToRefs} style={{ width: '100%', maxWidth: '1000px', height: '500px', borderRadius: '15px', overflow: 'hidden', position: 'relative' }}>
          {images.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt="Gym Facility" 
              className={`why-image ${idx === currentImage ? 'active' : ''}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, opacity: idx === currentImage ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            />
          ))}
        </div>
        
        <div className="community-text scroll-animate" ref={addToRefs} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', color: '#ccc', textAlign: 'justify', maxWidth: '800px', marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center', textTransform: 'uppercase' }}>You'll Never Train Alone Here</h3>
          <p>Walk in on any given morning and you'll notice it immediately - music playing, people talking across benches, and barely five people out of a hundred with earphones in. It's loud in the best way. It's not the coldest part of the gym you'll notice first - this is a no-AC space, and the mornings can genuinely bite - but you stop thinking about that the moment someone next to you offers a spot or a correction on your form.</p>
          <p>New here? You won't need to pay for a personal trainer to get started. Members who've been training for five, six years become that for you - for free. They'll show you the right form, push you when a set gets tough, and tell you honestly when you're cutting corners.</p>
          <p style={{ fontWeight: 'bold', color: '#e54b2d', textAlign: 'center', fontSize: '1.2rem', marginTop: '1rem' }}>That's the actual difference between Magic Muscle and every studio nearby: here, the community is the coaching staff.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
