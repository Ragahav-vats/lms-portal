import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import "./assets/css/style.css";
import Enroll from "./Components/Enroll";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Contact from "./Components/Contact";
import Course from "./Components/Course";
import About from "./Components/About";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter >
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/enroll" element={<Enroll/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/about-us" element={<About/>} />

      </Route>
    </Routes>
  </BrowserRouter>,
);
