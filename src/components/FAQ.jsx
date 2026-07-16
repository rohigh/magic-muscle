import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    q: "What types of fitness classes do you offer?",
    a: "We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and specialized functional fitness sessions."
  },
  {
    q: "Do I need to be a member to attend a class?",
    a: "While members get unlimited access, we do offer drop-in passes and 10-class punch cards for non-members who want to experience our community."
  },
  {
    q: "What should I bring to my first workout?",
    a: "Bring a water bottle, comfortable workout clothes, athletic shoes, and a positive attitude! We provide towels and all necessary training equipment."
  },
  {
    q: "What is your cancellation policy for classes?",
    a: "We ask that you cancel at least 12 hours before your scheduled class. Late cancellations may be subject to a small fee to ensure spot availability for others."
  }
];

function FAQ() {
  const animateRef = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="container">
      <div ref={animateRef}>
        <span className="section-subtitle animate-up">FAQs</span>
        <h2 className="section-title animate-up delay-1">Frequently Asked Questions</h2>
      </div>

      <div className="faq-grid" ref={animateRef}>
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item animate-up delay-${index > 2 ? 2 : index} ${openIndex === index ? 'active' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.q}
              <ChevronDown className="faq-icon" size={20} />
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
