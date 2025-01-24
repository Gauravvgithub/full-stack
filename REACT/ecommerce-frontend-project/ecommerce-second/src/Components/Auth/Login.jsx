import React, { useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPassword, fetchUser } from '../../Features/UserSlice';

const Login = () => {
  // Destructuring state from Redux store
  const { isLogin, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    if (!mail.trim() || !pass.trim()) {
      alert("Email and Password fields can't be empty");
      return;
    }

    dispatch(setEmail(mail));
    dispatch(setPassword(pass));
    dispatch(fetchUser());
  };

  return (
    <>
      <div className="mainDiv">
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {isLogin === "false" && (
          <div id='div2'>
            <div className="mb-3" >
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}

        {isLogin === "true" && <p>User logged in successfully!</p>}
      </div>
    </>
  );
};

export default Login;
