import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-container">
            <div class="footer-about">
                <h4>About Us</h4>
                <p>Your trusted source for quality construction materials. Providing contractors and homeowners with the best products since 1998.</p>
            </div>
    
            <div class="footer-links">
                <h4>Quick Links</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/aboutus">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    {/* // <li><Link to="/">FAQ</Link></li> */}
                </ul>
            </div>
    
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <p>Email: info@constructionstore.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Location: 123 Building Ave, Suite 100</p>
            </div>
    
            <div class="footer-social">
                <h4>Follow Us</h4>
                <ul>
                    <li><a href="/"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="/"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="/"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="/"><i class="fa fa-youtube"></i></a></li>
                </ul>
            </div>
        </div>
    
        <div class="footer-bottom">
            <p>&copy; 2024 Construction Store. All Rights Reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;