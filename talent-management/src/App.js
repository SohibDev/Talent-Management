import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar, Footer, Home } from "./pages";
import RegisterFirst from "./pages/registerOnePage/app";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <RegisterFirst />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
      </Routes> */}
      <Footer />
    </div>
  );
};

export default App;
