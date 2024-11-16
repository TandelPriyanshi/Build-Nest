import React from 'react';
import '../cssFiles/aboutServices.css';
import Navbar from '../components/navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar/>
    <div class="about-us-container">
        <h2>About Us</h2>
        <p>
            Welcome to <strong>BuildNest</strong>, your one-stop online shop for all your construction material needs.
            Established in 2024, we have quickly grown into a trusted supplier of high-quality construction products,
            serving both individual homeowners and professional builders. Our mission is to provide an easy,
            convenient, and cost-effective way to shop for construction materials, so you can focus on building
            and creating.
        </p>
        <br />
        <p>
            With a wide range of products, competitive pricing, and a team dedicated to customer satisfaction,
            <strong>BuildNest</strong> is here to support your project, big or small. We work closely with
            leading manufacturers to ensure that you receive only the best materials that meet industry standards.
        </p>
        <br />
        <p>
            At <strong>BuildNest</strong>, we believe in transparency, quality, and exceptional service. Our
            team is always ready to help you find the right materials and provide expert advice whenever you need it.
            We are committed to helping you succeed in all your construction endeavors.
        </p>
    </div>
    </>
  );
};

export default AboutUs;