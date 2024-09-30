import React from 'react';
import './Styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';  // Importing icons

const Footer = () => {
  return (
    <footer className="footer">
      {/* Yellow Band */}
      <div className="yellow-band"></div>

      <div className="footer-content">
        <div className="footer-links">
          <a href="/home" className="footer-link">Domů</a>
          <a href="/about" className="footer-link">O nás</a>
          <a href="/pricing" className="footer-link">Služby</a>
        </div>

        <div className="social-links">
          <a href="https://facebook.com" className="social-link"><FaFacebookF /></a>
          <a href="https://twitter.com" className="social-link"><FaTwitter /></a>
          <a href="https://instagram.com" className="social-link"><FaInstagram /></a>
        </div>

        <p className="footer-text">
          © 2024 Vaše Webovky - Profesionální weby na míru. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
