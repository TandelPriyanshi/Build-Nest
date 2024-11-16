import React, {useContext} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo1 from '../assets/Logo1.png';

const Navbar = () => {
    const { setIsAuthenticated } = useContext(AuthContext);

    let history = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        history("/signup"); // Update context state
    };
    return(
        <div className='home-header'>
            <nav className="navbar flex space-between">
                <div className="logo flex">
                    <img src={logo1} alt='Logo' />
                    <h2>Build Nest</h2>
                </div>
                <ul className="menu flex">
                <li><a href="/home" className="hover-link">Home</a></li>
                <li><a href="/aboutus"  className="hover-link">About</a></li>
                <li><a href="/services" className="hover-link">Our Services</a></li>
                <li><a href="/contact" className="hover-link">Contact Us</a></li>
                <li><a href="/cart"><i class="fa-solid fa-cart-shopping cart-icon"></i></a></li>
                <li><a href="/" className="head-secondary-button" onClick={handleLogout}>Log Out</a></li>
                </ul>
            </nav>
            {/* <div className="flex space-between">
                <div className="search-bar">
                    <select className="category-select">
                    <option>All Categories</option>
                    </select>
                    <input type="text" placeholder="Search Item..." className="search-input" />
                    <button className="search-button">🔍</button>
                </div>
                <div className="loc-cart flex">
                    <div className="location  flex space-between">
                        <div className="location-text"><p>Valsad</p></div>
                        <a href="/" ><i class="fa-solid fa-location-dot location-icon"></i></a>
                    </div>

                    <a href="/cart"><i class="fa-solid fa-cart-shopping cart-icon"></i></a>
                </div>
            </div> */}
        </div>
    );
} 

export default Navbar;