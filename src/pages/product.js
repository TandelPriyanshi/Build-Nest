import React from 'react'
import Navbar from '../components/navbar.js';
import Sidebar from '../components/sidebar.js';
import Footer from '../components/Footer.js';
import '../cssFiles/home.css';
import Productdeatils from '../components/ProductDeatils.js';

const Product = () => {
  return (
      <div className='home-body'>
        <Navbar />
        <Sidebar />
        <Productdeatils />
        <Footer />
    </div>
  )
}

export default Product