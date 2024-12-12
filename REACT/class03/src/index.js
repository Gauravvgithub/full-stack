import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent2 from './RevisionClassComponents-3Cases/ChildToChildren/Parent2';
// import CounterApp from './useState-Counter/CounterApp';
// import Father1 from './RevisionClassComponents-3Cases/ChildToParent/Father1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterApp/> */}
    {/* <Parent/> */}
    {/* <Father1/> */}
    <Parent2></Parent2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
