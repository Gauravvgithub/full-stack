import React from 'react';
import './index.css';
import productImage from "../assets/productImage.jpg"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



const LoginPage = () => {
  return (


    <div className="container">
      <div className="div1">
        <img 
            className='productImage'
          src={productImage}
          alt="productImg"
        />
      </div>
      <div className="div2">
        <h2>Welcome Back</h2>
        <p>
          Log in now to explore all the features and benefits of our platform and see what's new.
        </p>
        <label>
          Enter your email 
        </label>
        <input className="inptext" type="text" />
        <br />
        <br />
        <label>
          Enter your Password 
        </label>
        <input className="inppass" type="Password" />
        
        <p>
          <input  type="checkbox" /> Remember my account
        </p>
        <button className="forgetbtn">Forget Password?</button>
        <p>Don't have an account?</p>
        <button className="registerbtn">Register Now</button>
        <br />
        <button className="loginButton">Login</button>
      </div>
    </div>

  );
};

export default LoginPage;