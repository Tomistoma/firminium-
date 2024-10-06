import React, { useCallback, useState } from 'react';
import Particles from "react-particles";
import {motion} from "framer-motion"
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import './Styles/Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Contact() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );


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
                handleClick();
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
            <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Byli jsme úspěšně kontaktováni, děkujeme."
  action={
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        style={{
          color: 'white', // Close icon color
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  }
  sx={{
    '& .MuiSnackbarContent-root': {
      backgroundColor: 'var(--teal-color)', // Match the background color with your design
      color: '#282b33', // Text color to match the overall design
      fontFamily: 'Montserrat, sans-serif', // Font family to match your design
      fontWeight: 'bold',
      borderRadius: '10px', // Adding rounded corners to match your overall design aesthetic
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Adding subtle shadow
    },
    '& .MuiSnackbarContent-message': {
      fontSize: '1em', // Adjusting font size
    },
    '& .MuiSnackbarContent-action': {
      marginLeft: 'auto', // Align the close button to the right
    },
  }}
/>

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
        onClick={handleClick}
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
