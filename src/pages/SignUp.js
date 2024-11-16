import React, {useContext, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import {useNavigate} from 'react-router-dom';
import '../cssFiles/signup.css';

const SignUp = () => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({name:"",email:"", password:"", address:""});
    
    let history = useNavigate();
    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name:credentials.name, 
                email: credentials.email , 
                password: credentials.password, 
                address: credentials.address
            })
        });
        
        const json = await response.json();
        
        if(json.success) {
            // save the auth token and redirect
        localStorage.setItem('token',json.authToken);
        setIsAuthenticated(true);
        alert("Successfully Signed Up");
        history("/home");
        
    } else {
        alert("Invalid Credentials");
    }
}

    const onChange = (e) => {
        setCredentials({...credentials,[e.target.name]: e.target.value});
    }

    return (
      <div className='signup-body'>
      <div class="signup-container">
          <div class="signup-left">
              <h1>Welcome to Your Construction Hub!</h1>
              <p>Build smarter, not harder. Join us to access top-grade materials, exclusive deals, and expert insights.</p>
              <div class="social-icons">
                  <a href="/"><i class="fa fa-twitter"></i></a>
                  <a href="/"><i class="fa fa-facebook"></i></a>
                  <a href="/"><i class="fa fa-instagram"></i></a>
                  <a href="/"><i class="fa fa-youtube"></i></a>
              </div>
          </div>
          <div class="signup-right">
              <h2>Sign Up</h2>
              <div className='signup-form'>
                  <input name='name' type="text" placeholder="Name" required value={credentials.name} onChange={onChange}/>
                  <input name='email' type="email" placeholder="Email Address" required value={credentials.email} onChange={onChange}/>
                  <input name='password' type="password" placeholder="Password" required value={credentials.password} onChange={onChange}/>
                  <input name='address' type="text" placeholder="Address" required value={credentials.address} onChange={onChange}/>

                  <button onClick={handleSubmit} type="submit" class="primary-button">Sign Up Now</button>
                  
                  <a href="/signin" class="sign-in">Already have an account? Sign In</a>
                  <p class="terms">
                      <a href="/terms">Terms of Service</a> | <a href="/">Privacy Policy</a>
                  </p>
              </div>
          </div>
      </div>
      <script src="https://kit.fontawesome.com/bd27e6ffb5.js" crossorigin="anonymous"></script>
  </div>
    )
}

export default SignUp
