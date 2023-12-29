import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutPage from "./components/Pages/AboutPage";
import ProjectRouters from "./components/ProjectRouters";
import OtherCourses from "./components/Pages/OtherCourses";
import Courses from "./components/Pages/Courses";
import Copyright from "./components/Container/Copyright";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar /> }>
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/home" element={<ProjectRouters />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/othercourses" element={<OtherCourses />} />
          <Route path="/courses" element={<Courses />} />
        </Route>
      </Routes>
  );
};

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
