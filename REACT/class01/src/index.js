import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import FinalForm from './Components/ClassComponents/FinalForm';
// import Parent from './ComponentsWiseCommunications/FunctionalComponents/ParentToChild/Parent';
import Parent1 from './ComponentsWiseCommunications/FunctionalComponents/ChildToParent/Parent1';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { FinalForm } from './Components/FunctionalComponents/FinalForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FinalForm/> */}
    {/* <FinalForm/> */}
    {/* <Parent/> */}
    {/* <Parent1/> */}
    <Parent1/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
