import React from 'react';
import './Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Yellow Band */}
      <div className="yellow-band"></div>

      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Domů</a>
          <a href="/about" className="footer-link">O nás</a>
          <a href="/pricing" className="footer-link">Služby</a>
        </div>



        <p className="footer-text">
          © 2024 Firminium - Tomáš Svoboda - Profesionální weby na míru. Všechna práva vyhrazena.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
