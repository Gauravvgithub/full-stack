import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Username from './Components/FuncationlComponents/Username';
import Usernamec from './Components/ClassComponents/Usernamec';
import Parent from './Data-Communication/FuncationalComponents/Case-1/Parent';
import Parent1 from './Data-Communication/FuncationalComponents/Case-2/Parent1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Username/> */}
    {/* <Usernamec/> */}
    {/* <Parent/> */}
    <Parent1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
