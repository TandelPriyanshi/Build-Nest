import React from 'react';
import '../cssFiles/aboutServices.css';
import Navbar from '../components/navbar';

const Services = () => {
  return (
    <>
    <Navbar/>
    <div class="our-services-container">
        <h2>Our Services</h2>
        <ul>
            <li>
                <h3>Wide Range of Construction Materials</h3>
                <p>
                    We offer a comprehensive selection of construction materials, including cement, steel,
                    bricks, timber, roofing, plumbing, electrical supplies, and much more. Whatever you need,
                    we have it in stock.
                </p>
            </li>
            <li>
                <h3>Fast & Reliable Delivery</h3>
                <p>
                    We understand that time is crucial in construction projects. That's why we provide fast
                    and reliable delivery services to ensure that your materials reach you on time, every time.
                </p>
            </li>
            <li>
                <h3>Expert Advice & Support</h3>
                <p>
                    Our team of experts is always available to offer advice, answer questions, and provide
                    guidance on choosing the right materials for your project. We're here to help you every
                    step of the way.
                </p>
            </li>
            <li>
                <h3>Customized Orders</h3>
                <p>
                    Need something specific? We offer customized orders tailored to your requirements,
                    ensuring you get exactly what you need for your project.
                </p>
            </li>
            <li>
                <h3>Quality Assurance</h3>
                <p>
                    We are committed to providing only the best-quality materials. All our products undergo
                    strict quality checks to meet industry standards and ensure durability and reliability.
                </p>
            </li>
            <li>
                <h3>Competitive Pricing</h3>
                <p>
                    We offer competitive pricing on all our products, so you can get the best value without
                    compromising on quality.
                </p>
            </li>
        </ul>
    </div>
    </>
  );
};

export default Services;