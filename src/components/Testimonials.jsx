import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "I've been coming here for the past 6 months, and it's the best decision I made! The trainers understand our lifestyle and create personalized workout plans.",
    author: "Sarah Johnson",
    role: "Member since 2023",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "The facilities are clean and modern, and the staff is always supportive. I've lost 15 lbs and gained so much confidence. Highly recommend the group classes!",
    author: "Michael Chen",
    role: "Member since 2022",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    text: "As a professional athlete, I need top-tier equipment. This gym provides everything I need to perform at my absolute peak. Elite environment.",
    author: "David Miller",
    role: "Pro Athlete",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

function Testimonials() {
  const animateRef = useScrollAnimation();

  return (
    <section id="reviews" className="testimonials-section">
      <div className="container">
        <div ref={animateRef}>
          <span className="section-subtitle animate-up">Reviews</span>
          <h2 className="section-title animate-up delay-1">Inspiring Journeys</h2>
        </div>

        <div className="testi-grid" ref={animateRef}>
          {testimonials.map((t, index) => (
            <div key={index} className={`testi-card animate-up delay-${index > 2 ? 2 : index}`}>
              <Quote className="quote-icon" size={60} />
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <img src={t.img} alt={t.author} className="author-img" />
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
