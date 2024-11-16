import React, {useContext, useState} from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../cssFiles/signin.css';

const SignIn = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({email:"", password:""});

  let history = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email,password: credentials.password})
    });

    const json = await response.json();

    if(json.success) {
      // save the auth token and redirect
      localStorage.setItem('token',json.authToken);
      setIsAuthenticated(true);
      alert("Successfully Signed In");
      history("/home");

    } else {
      alert("Invalid Credentials");
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials,[e.target.name]: e.target.value});
  }

  return (
    <div className='signin-body flex'>
      <div className="container">
        <div className="welcome-section">
          <h1>Welcome Back</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <div className="social-links">
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-instagram"></i></a>
            <a href="/"><i className="fa fa-youtube"></i></a>
          </div>
        </div>
        <div className="signin-section">
          <h2>Sign In</h2>
          <div className='signin-form'>
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" className="input" value={credentials.email} onChange={onChange} />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" className="input" value={credentials.password} onChange={onChange}/>

            <button onClick={handleSubmit} type="submit" className="primary-button">Sign In</button>

            <div className="option">
              <a href="/signup" className="sign-up">Don't Have Account? Sign Up</a>
            </div>


            <p className="terms">
              <a href="/terms">Terms of Service</a> | <a href="/">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn