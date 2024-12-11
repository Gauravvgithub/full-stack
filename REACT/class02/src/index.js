import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Parent from './Components/ClassComponents/ParentToChild/Parent';
import Parent1 from './Components/ClassComponents/ChildToParent/Parent1';
import Child2 from './Components/ClassComponents/ChildToChildren/Child2';
import App from './UseState&Hooks/Functional-Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Parent/> */}
    {/* <Parent1/> */}
    {/* <Child2/> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
