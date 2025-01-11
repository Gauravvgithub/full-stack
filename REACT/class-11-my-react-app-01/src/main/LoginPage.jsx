import React from 'react';
import './index.css';
import productImage from "../assets/productImage.jpg";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <BrowserRouter>
    <h1>Discover deals and delights made just for you</h1>
      <Routes>
        <Route path='/' element={
          <div>
            <img src={productImage} alt="productImg" />
          </div>
        }>
        </Route>
        <Route path='/' element={
          <div className='container'>
          <div className="div2">
          <h2>Welcome Back</h2>
          <p>
            Log in now to explore all the features and benefits of our platform and see what's new.
          </p>
          <label>Enter your email</label>
          <input className="inptext" type="text" />
          <br />
          <br />
          <label>Enter your Password</label>
          <input className="inppass" type="password" />
          
          <p>
            <input type="checkbox" /> Remember my account
          </p>
          <button className="forgetbtn">Forget Password?</button>
          <p>Don't have an account?</p>
          <button className="registerbtn">Register Now</button>
          <br />
          <button className="loginButton">Login</button>
        </div>
        </div>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

export default LoginPage;
