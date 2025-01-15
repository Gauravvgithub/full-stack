import React from 'react';
import './index.css';
import Guest from './Guest';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const LoginPage = () => {

  const isLogin = true;
  return (
    <BrowserRouter>
      <Routes>
      {isLogin && <>
        <Route path='/' element={
          <form id='container'>        
          <div className="div1">
          <h2>Welcome Back</h2>
          <h4>Please enter your details</h4>
          <div className='loginDiv'>
          <label>Enter your email</label>
          <input className="inptext" type="text" requiredpattern='.+@example.com' placeholder='example123@gmail.com' />
          </div>
          <div>
          <label>Enter your Password</label>
          <input className="inppass" type="password" placeholder='example@123'/>
          </div>
          <div className='loginDiv'>
          <p className='loginP'>
            <input type="checkbox" /> Remember my account
          </p>
          </div>
          <div className='loginDiv'>
          <button className="forgetbtn">Forget Password?</button>
          <p className='loginP' >Don't have an account?</p>
          <button className="registerbtn">Register Now</button>
          <br />
          <button className="loginButton"><Link className='loginLink' to="/guest">Login</Link></button>
          <br />
          {/* <button className="loginButton">Login</button> */}
          </div>
          <div className="icon">
            <a href="#"><ion-icon name="logo-facebook"/></a>
            <a href="#"><ion-icon name="logo-Instagram"/></a>
            <a href="#"><ion-icon name="logo-github"/></a>
            <a href="#"><ion-icon name="logo-Google"/></a>
            <a href="#"><ion-icon name="logo-twitter"/></a>
            <a href="#"><ion-icon name="logo-Linkedin"/></a>
          </div>
        </div>
        </form>
        }>
        </Route></>}
        <Route path="*" element={<h2>not found</h2>}></Route>
        <Route path="/guest" element={<Guest/>} ></Route>
        {!isLogin &&<>
        <Route path="/" element={<h2>Please Login and Come Back</h2>} ></Route>
        <Route path="*" element={<h2>not found</h2>}></Route>
      </>}
      </Routes>
    </BrowserRouter>
  );
};

export default LoginPage;