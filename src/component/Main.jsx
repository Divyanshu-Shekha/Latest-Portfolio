import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Experience from "../pages/Experience";
import Project from "../pages/Project";

import { Route, Routes } from "react-router-dom";


const Main = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />}/>
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Education" element={<Education />}/>
            <Route path="/Experience" element={<Experience />}/>
            <Route path="/Project" element={<Project />}/>
        </Routes>
        </>
    )
}

export default Main