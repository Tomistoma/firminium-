import React, { useCallback, useState } from 'react';
import Particles from "react-particles";
import {motion} from "framer-motion"
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import './Styles/Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, []);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        need: ''
    });
    
    const [errors, setErrors] = useState({});

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name.';
        }

        if (!formData.company.trim()) {
            newErrors.company = 'Please enter your company name.';
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Prosíme použijte platnout emailovou adresu.';
        }

        const phonePattern = /^\d{9,14}$/;  // Phone number validation
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = 'Prosíme vložte platné telefoní číslo bez předvolby.';
        }

        if (!formData.need.trim()) {
            newErrors.need = 'Prosíme popište svoji poptávku.';
        }

        return newErrors;
    };

// Handle form submission
const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        try {
            // Send form data to the server as a POST request
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                   

                },
                body: JSON.stringify(formData),
                credentials: 'include' // If cookies or authentication are being sent
            });
            console.log(response);
            // Check if the response is successful
            if (response.ok) {
                console.log('Form Submitted', formData);
                alert('Thank you for contacting us!');
                // Reset form
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    need: ''
                });
                setErrors({});
            } else {
                // Handle error response from server
                alert('There was a problem with your submission. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was a problem submitting the form. Please try again.');
        }
    }
};


    return (
        <div className="App">
            <Particles className="particles" options={particlesOptions} init={particlesInit} />
            <Navbar />

            {/* Contact Form Section */}
            <div className="contact-form">
                <h2>Kontaktujte nás</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Jméno</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Vaše jméno"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="company">Název firmy</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Název vaší firmy/OSVČ"
                        />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Váš email"
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Telefon</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Váš telefon"
                        />
                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="need">Představa</label>
                        <textarea
                            id="need"
                            name="need"
                            value={formData.need}
                            onChange={handleInputChange}
                            placeholder="Stručně popište vaše představy..."
                        />
                        {errors.need && <p className="error-message">{errors.need}</p>}
                    </div>
                    <motion.button
        className="submit-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"  // This ensures it acts as a submit button
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        Odeslat
    </motion.button>

                
                </form>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
