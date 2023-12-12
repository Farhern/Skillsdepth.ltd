import React from "react";
import Navbar from "./components/Navbar/Navbar";
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
        </Route>
        
      </Routes>
   </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
