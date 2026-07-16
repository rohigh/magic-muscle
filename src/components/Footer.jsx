import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="footer-title">STRIKE FITNESS</h2>
          <p className="footer-tagline">Your body can stand almost anything. It's your mind that you have to convince.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram" className="social-icon"><Instagram size={24} /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><Twitter size={24} /></a>
            <a href="#" aria-label="Facebook" className="social-icon"><Facebook size={24} /></a>
            <a href="#" aria-label="Youtube" className="social-icon"><Youtube size={24} /></a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="footer-contact">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          
          <div className="contact-item">
            <MapPin className="contact-icon" size={20} />
            <div className="contact-text">
              <p>123 Iron Avenue</p>
              <p>Fitness District, FD 10024</p>
            </div>
          </div>
          
          <div className="contact-item">
            <Phone className="contact-icon" size={20} />
            <div className="contact-text">
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="contact-item">
            <Mail className="contact-icon" size={20} />
            <div className="contact-text">
              <p>join@strikefitness.com</p>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Strike Fitness. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
