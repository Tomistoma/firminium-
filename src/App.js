import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './Styles/Main.css';
import particlesOptions from "./particles.json";
import {motion} from "framer-motion"
import Navbar from './Navbar';
import Footer from './Footer';

// Importing react-icons
import { FaRocket, FaMobileAlt, FaSearch, FaShieldAlt, FaCogs } from 'react-icons/fa';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, []);

    return (
        <div className="App">
            <Particles className="particles" options={particlesOptions} init={particlesInit} />
            <Navbar />

            {/* Hero Section */}
            <div className='hero-head'>
                <h1>Profesionální webové stránky pro malé podnikatele</h1>
                <p>Ideální pro živnostníky, startupy, malé firmy a kohokoliv, kdo se chce přidat na online trh.</p>
                
                <motion.button
        className="cta-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.location.href = '/contact'}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        Nezávazně poptat
    </motion.button>
              
            </div>

            {/* 5 Quality Boxes Section */}
            <div className="quality-boxes">
                <div className="box">
                    <div className="box-content">
                        <FaRocket className="box-icon" />  {/* Speed Icon */}
                        <h3>Rychlost</h3>
                        <p>Rychle nasazené webové stránky pro rychlé spuštění vaší prezentace.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <FaMobileAlt className="box-icon" /> {/* Responsive Icon */}
                        <h3>Responzivita</h3>
                        <p>Webové stránky, které se přizpůsobí jakémukoli zařízení, mobilu i desktopu.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <FaSearch className="box-icon" /> {/* SEO Icon */}
                        <h3>SEO </h3>
                        <p>Optimalizace pro vyhledávače, aby váš web byl snadno k nalezení na Googlu.</p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <FaShieldAlt className="box-icon" />  {/* Security Icon */}
                        <h3>Bezpečnost</h3>
                        <p>Vaše webové stránky budou zabezpečené a chráněné proti útokům hackerů.</p>
                    </div>
                </div>
            </div>

            {/* Wide Box */}
            <div className="wide-box">
                <div className="wide-box-content">
                    <FaCogs className="wide-box-icon" />  {/* Customization Icon */}
                    <h3>Maximální spolehlivost</h3>
                    <p>Postaráme se o vše, co souvisí s tvorbou vašich webových stránek – od programování přes nastavení serveru, domény až po veškeré technické detaily, které nebudete muset řešit. Vy nám jen sdělíte svou představu a my ji proměníme ve skutečnost. Vaše stránky budou nejen bezstarostně hotové, ale přesně podle vašich přání.</p>
                </div>
            </div>
            
            <Footer />
        </div>
    );
}

export default App;
