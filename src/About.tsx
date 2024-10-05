import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import './Styles/About.css';
import Navbar from './Navbar';
import Footer from './Footer';
import type { Engine } from 'tsparticles-engine'; 

function About() {
    const particlesInit = useCallback((main: Engine) => {
        loadFull(main);
    }, []);

    return (
        <div className="App">
            <Particles className="particles" options={particlesOptions} init={particlesInit} />
            <Navbar />

            {/* About Us Section */}
            <div className="about-section">
                <h2>Kdo jsme</h2>
                <p>
                    Jsme malá firma, která se specializuje na tvorbu dostupných a efektivních webových stránek pro malé a střední podniky. 
                    Naším hlavním cílem je pomoci podnikatelům, freelancerům a menším firmám s jejich online prezentací.
                </p>
                <p>
                    Postaráme se o vše – od programování přes nastavení serveru až po marketing a online reklamu. Chápeme, že každý podnik je jedinečný, 
                    a proto vytváříme řešení na míru, které jsou dostupné pro malé podnikatele, aniž by to znamenalo kompromisy v kvalitě.
                </p>
                <p>
                    Naše služby zahrnují:
                </p>
                <ul>
                    <li>Kompletní programování a vývoj webových stránek</li>
                    <li>Nastavení serverů a domén</li>
                    <li>SEO optimalizace pro vyhledávače</li>
                    <li>Marketing a online reklama</li>
                    <li>Technická podpora a údržba webových stránek</li>
                </ul>
                <p>
                    Naším posláním je pomoci vám uspět v online světě, ať už potřebujete jednoduchou prezentační stránku nebo pokročilé webové řešení. 
                    Jsme tu, abychom vám poskytli podporu na každém kroku vaší cesty k úspěšnému online podnikání.
                </p>
            </div>

            <Footer />
        </div>
    );
}

export default About;
