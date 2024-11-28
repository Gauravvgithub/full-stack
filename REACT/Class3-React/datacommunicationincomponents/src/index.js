import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './functional-components/case-i/Parent';
import Parent2 from './functional-components/case-ii/Parent2';
import ParentComponent from './functional-components/case-iii/ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Parent></Parent> */}
    {/* <Parent2></Parent2> */}
    <ParentComponent></ParentComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();