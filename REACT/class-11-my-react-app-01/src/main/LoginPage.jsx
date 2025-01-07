import React, { useState } from 'react';
import './index.css';

const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and register views
  const [notification, setNotification] = useState(''); // Notification for success or error
  const [users, setUsers] = useState([]); // Store registered users

  // Handle Login
  const handleLogin = () => {
    const email = document.querySelector('.inptext').value;
    const password = document.querySelector('.inppass').value;

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setNotification('Login successful! Welcome back!');
    } else {
      setNotification('Invalid email or password. Please try again.');
    }

    // Clear notification after a delay
    setTimeout(() => setNotification(''), 3000);
  };

  // Handle Registration
  const handleRegister = () => {
    const email = document.querySelector('.regEmail').value;
    const password = document.querySelector('.regPassword').value;

    if (users.some((u) => u.email === email)) {
      setNotification('This email is already registered. Try logging in.');
    } else if (email && password) {
      setUsers([...users, { email, password }]);
      setNotification('Registration successful! You can now log in.');
      setIsRegistering(false); // Switch to login view
    } else {
      setNotification('Please fill in all fields to register.');
    }

    // Clear notification after a delay
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="container">
      <div className="div1">
        <img
          className="productImage"
          src="https://images.pexels.com/photos/1537671/pexels-photo-1537671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="productImg"
        />
      </div>
      <div className="div2">
        <h2>{isRegistering ? 'Create an Account' : 'Welcome Back'}</h2>
        <p>
          {isRegistering
            ? 'Register now to get started on our platform.'
            : "Log in now to explore all the features and benefits of our platform and see what's new."}
        </p>

        {isRegistering ? (
          // Registration Form
          <>
            <label>Enter your email</label>
            <input className="regEmail" type="text" />
            <br />
            <br />
            <label>Create a Password</label>
            <input className="regPassword" type="password" />
            <br />
            <br />
            <button className="registerButton" onClick={handleRegister}>
              Register
            </button>
            <p>
              Already have an account?{' '}
              <button onClick={() => setIsRegistering(false)} className="toggleButton">
                Log In
              </button>
            </p>
          </>
        ) : (
          // Login Form
          <>
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
            <button
              onClick={() => setIsRegistering(true)}
              className="registerButton"
            >
              Register Now
            </button>
            <br />
            <button className="loginButton" onClick={handleLogin}>
              Login
            </button>
          </>
        )}

        {/* Notification Section */}
        {notification && (
          <div
            className={`notification ${
              notification.includes('successful') ? 'success' : 'error'
            }`}
          >
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
