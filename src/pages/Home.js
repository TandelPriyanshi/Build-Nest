import React,{useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Navbar from '../components/navbar.js';
import Sidebar from '../components/sidebar.js';
import Main from '../components/main_content.js';
import Footer from '../components/Footer.js';
import '../cssFiles/home.css';

const Home = () => {
  
  // const { isAuthenticated } = useContext(AuthContext);
  // if (!isAuthenticated) {
  //   return <Navigate to="/signup" />;
// }
  return (
      <div className='home-body'>
        <Navbar />
        <Sidebar />
        <Main />
        <Footer />
    </div>
  )
}

export default Home