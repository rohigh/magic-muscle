import React from 'react';
import { Instagram, MapPin, Phone } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        
        {/* CTA Section */}
        <div className="footer-cta" style={{ textAlign: 'center', marginBottom: '2rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <h2 style={{ fontFamily: 'Anton, sans-serif', fontSize: '3rem', color: '#fff', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1.2' }}>
            Come Sweat With People Who Actually Care If You Show Up
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#d4d4d4', maxWidth: '800px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            No pretense - just honest training, real machinery, and a community that's been getting each other stronger for four years and counting. Come see it for yourself in Kanchipuram.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://www.google.com/maps/dir//Muscle+Magic+(Unisex+Fitness+Centre),+SH4+Second+Floor,+Vandavasi+Main+Road,+opp.+SP+Bangalow,+near+Collector+office,+Kanchipuram,+Tamil+Nadu+631501/@13.090816,80.2226176,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a52c34f9dbdb023:0xa47e863badccfdfe!2m2!1d79.6962344!2d12.8202925?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '1rem 2.5rem', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', backgroundColor: '#e54b2d', color: '#fff', textDecoration: 'none', display: 'inline-block' }}
            >
              Get Directions
            </a>
            <a 
              href="https://wa.me/918667626438?text=Hi!%20I%20would%20like%20to%20try%20my%20first%20session%20free."
              target="_blank" 
              rel="noopener noreferrer"
              style={{ padding: '1rem 2.5rem', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', color: '#fff', border: '2px solid #e54b2d', backgroundColor: 'transparent', textDecoration: 'none', display: 'inline-block' }}
            >
              Try Your First Session Free
            </a>
          </div>
        </div>

        <div className="footer-info-wrapper" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '3rem', width: '100%' }}>
          {/* Brand Section */}
          <div className="footer-brand">
            <h2 className="footer-title" style={{ color: '#e54b2d' }}>MAGIC MUSCLE</h2>
            <p className="footer-tagline">Where everyone lifts together.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/muscle_magic21/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/918667626438" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="footer-contact">
          <h3 className="footer-heading">GET IN TOUCH</h3>
          
          <div className="contact-item">
            <MapPin className="contact-icon" size={20} style={{ flexShrink: 0, marginTop: '4px' }} />
            <div className="contact-text">
              <p>SH4 Second Floor, Vandavasi Main Road</p>
              <p>opp. SP Bangalow, near Collector office</p>
              <p>Kanchipuram, Tamil Nadu 631501</p>
            </div>
          </div>
          
          <div className="contact-item">
            <Phone className="contact-icon" size={20} style={{ flexShrink: 0 }} />
            <div className="contact-text">
              <p>+91 866 762 6438</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Magic Muscle. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
