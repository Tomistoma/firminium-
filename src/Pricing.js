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
      <h2>Kdo jsme</h2>
      <p>tady jsme</p>
      </div>


      {/* Pricing Section with 3 Packages Aligned Horizontally */}
      <div className="pricing-section">
        <div className="pricing-card">
          <h2 className="pricing-title">Basic</h2>
          <p className="price">5 000 Kč</p>
          <ul className="features">
            <li><FaCheck className="feature-icon" /> Jednoduchý one-page web</li>
            <li><FaCheck className="feature-icon" /> Responzivní design (pro mobil a desktop)</li>
            <li><FaCheck className="feature-icon" /> Základní SEO optimalizace</li>
            <li><FaCheck className="feature-icon" /> Základní hosting na 6 měsíců zdarma</li>
          </ul>
          <p className="note">Ceny jsou orientační</p>
          <a href="#contact" className="cta-button">Vybrat Basic</a>
        </div>

        <div className="pricing-card recommended">
          <h2 className="pricing-title">Standard</h2>
          <p className="price">10 000 Kč</p>
          <ul className="features">
            <li><FaCheck className="feature-icon" /> Vícestránkový web (3–5 stránek)</li>
            <li><FaCheck className="feature-icon" /> Vlastní design na míru</li>
            <li><FaCheck className="feature-icon" /> Responzivní design (mobil + desktop)</li>
            <li><FaCheck className="feature-icon" /> SEO optimalizace</li>
            <li><FaCheck className="feature-icon" /> Základní hosting na 12 měsíců zdarma</li>
          </ul>
          <p className="note">Ceny jsou orientační</p>
          <a href="#contact" className="cta-button">Vybrat Standard</a>
        </div>

        <div className="pricing-card">
          <h2 className="pricing-title">Premium</h2>
          <p className="price">18 000 Kč</p>
          <ul className="features">
            <li><FaCheck className="feature-icon" /> Individuální návrh webu na míru</li>
            <li><FaCheck className="feature-icon" /> Pokročilé SEO optimalizace</li>
            <li><FaCheck className="feature-icon" /> Integrace rezervačního systému nebo e-shopu</li>
            <li><FaCheck className="feature-icon" /> Bezpečnostní optimalizace</li>
            <li><FaCheck className="feature-icon" /> Prémiový hosting na 12 měsíců zdarma</li>
          </ul>
          <p className="note">Ceny jsou orientační</p>
          <a href="#contact" className="cta-button">Vybrat Premium</a>
        </div>
      </div>
 {/* Server Pricing Section */}
 <div className="server-pricing">
        <p className="server-text"><FaServer /> Běh serveru: <span className="server-price">500 Kč/měsíc</span></p>
        <p className="note">Uvedené ceny jsou orientační a mohou se měnit dle specifických požadavků.</p>
      </div>

      {/* Redesigned Extended Service Packages */}
      <div className="service-packages">
        <h2 className="section-title">Rozšířené balíčky</h2>
        <div className="package-cards-centered">
          <div className="package-card-centered">
            <h3>Web na míru</h3>
            <p className="package-price">15 000 Kč</p>
            <ul className="package-features-centered">
              <li><FaCheck className="feature-icon" /> Vícestránkový web (do 5 stránek)</li>
              <li><FaCheck className="feature-icon" /> SEO optimalizace</li>
              <li><FaCheck className="feature-icon" /> 12 měsíců hosting zdarma</li>
              <li><FaCheck className="feature-icon" /> Správa domény na 12 měsíců</li>
            </ul>
          </div>

          <div className="package-card-centered">
            <h3>Web + Marketing</h3>
            <p className="package-price">20 000 Kč</p>
            <ul className="package-features-centered">
              <li><FaCheck className="feature-icon" /> Vše, co obsahuje "Web na míru"</li>
              <li><FaCheck className="feature-icon" /> Správa sociálních sítí (3 měsíce)</li>
              <li><FaCheck className="feature-icon" /> Google My Business nastavení</li>
              <li><FaCheck className="feature-icon" /> Pravidelná údržba na 6 měsíců zdarma</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Redesigned Additional Services Section */}
      <div className="additional-services">
        <h2 className="section-title">Další služby</h2>
        <div className="additional-cards-centered">
          <div className="service-card">
            <FaChartLine className="service-icon" />
            <h3>SEO balíček</h3>
            <p className="service-price">3 000 Kč</p>
            <p className="service-description">Optimalizace pro vyhledávače, analýza klíčových slov, SEO-friendly obsah.</p>
          </div>

          <div className="service-card">
            <FaBullhorn className="service-icon" />
            <h3>Marketing na sociálních sítích</h3>
            <p className="service-price">2 000 Kč/měsíc</p>
            <p className="service-description">Správa profilů na sociálních sítích (Facebook, Instagram) a tvorba grafiky.</p>
          </div>

          <div className="service-card">
            <FaWrench className="service-icon" />
            <h3>Údržba webu</h3>
            <p className="service-price">300 Kč/měsíc</p>
            <p className="service-description">Pravidelná údržba, aktualizace a zálohování webu, technická podpora.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
