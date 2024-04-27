import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Logo</div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3 className='section-title'>Links</h3>
            <ul className="section-list">
              <li><a href="/" className="section-link">Home</a></li>
              <li><a href="/blog" className="section-link">Blog</a></li>
              <li><a href="/contact" className="section-link">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className='section-title'>Contacts</h3>
            <ul className="section-list">
              <li className="contact-info">Mobile: 75*******7</li>
              <li className="contact-info">Email: Kaajalchhattani@gmail.com</li>
              <li className="contact-info">Address: 63/73 HeeraPath, Mansarovar, Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
