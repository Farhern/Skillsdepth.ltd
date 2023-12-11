import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/Container/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AboutPage from "./components/Pages/AboutPage";
import ProjectRouters from "./components/ProjectRouters";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<ProjectRouters />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="about" element={ <About /> }/>
        </Route>
      </Routes>
   </BrowserRouter>
  );
  // return (
  //   <div className="font-Poppins bg-Solitude">
    
  //     <Navbar />
  //     <Home />
  //     <About />
  //     <Services />
  //     <Contact />
  //     <Footer />
  //     <Routers />
  //   </div>
    
  // );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
