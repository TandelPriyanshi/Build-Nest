import React, { useState } from "react";
import "../cssFiles/contactus.css"; 
import Navbar from "../components/navbar";
import { Link } from "react-router-dom"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <>
    <Navbar />
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for contacting us!</h2>
            <p>We will get back to you shortly.</p>
            <br></br>
            <a href="/home"><i class="fa-solid fa-house"></i></a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
              />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-textarea"
            />
          </div>

          <button type="submit" className="head-primary-button">
            Send Message
          </button>
        </form>
      )}
    </div>
    </>
  );
};

export default ContactUs;