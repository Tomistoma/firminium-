import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './Styles/Pricing.css';
import particlesOptions from './particles.json'; // Reuse the particle config
import Navbar from './Navbar';
import Footer from './Footer';
import { FaCheck, FaServer, FaChartLine, FaBullhorn, FaWrench } from 'react-icons/fa'; // Icons for services

const Pricing = () => {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles className="particles" options={particlesOptions} init={particlesInit} />
      <Navbar />
<div className='about-section'>
      <h2>Vyberte si rozsah služeb dle vašeho rozpočtu</h2>
      </div>


      {/* Pricing Section with 3 Packages Aligned Horizontally */}
      <div className="pricing-section">
        <div className="pricing-card">
          <h2 className="pricing-title">Simple</h2>
          <p className="price">5 000 Kč</p>
          <ul className="features">
            <li><FaCheck className="feature-icon" /> Jednoduchý one-page web</li>
            <li><FaCheck className="feature-icon" /> Responzivní design (pro mobil a desktop)</li>
            <li><FaCheck className="feature-icon" /> Nastavení hostingu</li>
          </ul>
          <p className="note">Toto řešení je ideální pro osobní prezentace, životopisy (CV) nebo menší podniky, které potřebují jednoduchou, ale profesionální online přítomnost.</p>
          
        </div>

        <div className="pricing-card recommended">
          <h2 className="pricing-title">Standard</h2>
          <p className="price">12 000 Kč</p>
          <ul className="features">
            <li><FaCheck className="feature-icon" /> Vícestránkový web (3–5 stránek)</li>
            <li><FaCheck className="feature-icon" /> Vlastní design na míru</li>
            <li><FaCheck className="feature-icon" /> Responzivní design (mobil + desktop)</li>
            <li><FaCheck className="feature-icon" /> SEO optimalizace</li>
            <li><FaCheck className="feature-icon" /> Nastavení hostingu</li>
          </ul>
          <p className="note">Toto řešení je vhodné pro firmy, organizace nebo jednotlivce, kteří potřebují sofistikovanější webové stránky s více stránkami a personalizovaným designem. Ideální pro profesionální prezentaci produktů, služeb nebo portfolií.</p>
        </div>

        <div className="pricing-card">
          <h2 className="pricing-title">Premium</h2>
          <p className="price">18 000 Kč</p>
          <ul className="features">
            <li><FaCheck className="feature-icon" /> Individuální návrh webu na míru</li>
            <li><FaCheck className="feature-icon" /> Pokročilé SEO optimalizace</li>
            <li><FaCheck className="feature-icon" /> Např. Integrace rezervačního systému</li>
            <li><FaCheck className="feature-icon" /> Bezpečnostní optimalizace</li>
            <li><FaCheck className="feature-icon" /> Nastavení hostingu</li>
          </ul>
          <p className="note">Tento balíček je ideální pro náročné klienty, kteří potřebují komplexní webové řešení s pokročilými funkcemi, jako je integrace rezervačního systému nebo platební brány. Vhodné pro firmy, které chtějí profesionální, bezpečný a optimalizovaný web s individuálním přístupem k designu.</p>
         
        </div>
      </div>
 {/* Server Pricing Section */}
 <div className="server-pricing">
        <p className="server-text">  Základní běh webových stránek: <span className="server-price">500 Kč/měsíc</span></p>
        <p className="note">Uvedené ceny jsou orientační a mohou se měnit dle specifických požadavků.</p>
      </div>

  

      {/* Redesigned Additional Services Section */}
      <div className="additional-services">
        <div className="additional-cards-centered">
      
        <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Vedení serveru</h3>
            <p className="service-price">300 Kč/měsíc</p>
            <p className="service-description">Provozní výdaje serveru.</p>
          </div>
          <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Marketing</h3>
            <p className="service-price">500 a více Kč/měsíc</p>
            <p className="service-description">Reklama Vaší stránky na Google, Instagramu a dalších sociálních sítích.</p>
          </div>

          <div className="service-card">
            <FaWrench className="service-icon" />
            <h3>Údržba webu</h3>
            <p className="service-price">200 Kč/měsíc</p>
            <p className="service-description">Pravidelná údržba, aktualizace a zálohování webu, technická podpora.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
