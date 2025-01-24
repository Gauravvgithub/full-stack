import React from "react";
import './index.css'
import { useSelector } from "react-redux";
import Login from "./Components/Auth/Login";
import HomePage from "./Components/Home/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const { isLogin } = useSelector((state) => state.user);
  return (
    <>
      <Router>
        {isLogin === "false" && (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<p>page not found</p>} />
          </Routes>
        )}

        {isLogin === "true" && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<p>page not found</p>} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;
