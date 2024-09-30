import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client'; 
import Pricing from './Pricing';
import Contact from './Contact';
import About from './About';
import './Styles/Main.css'; // Import the main CSS file

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <HelmetProvider> 
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  </HelmetProvider>
);
