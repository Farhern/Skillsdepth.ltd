import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Container/Home";
import About from "./components/Container/About";
import Footer from "./components/Container/Footer";
//import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="font-Poppins bg-Solitude">
    
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
    
  );
};

export default App;
