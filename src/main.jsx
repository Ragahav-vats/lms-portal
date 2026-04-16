import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import "./assets/css/style.css";
import Enroll from "./Components/Enroll";
import Login from "./Components/Login";
import Contact from "./Components/Contact";
import Course from "./Components/Course";
import About from "./Components/About";
import Dashboard from "./SubComponents/Dashboard";
import OverView from "./SubComponents/OverView";
import Update from "./SubComponents/Update";
import App from "./SubComponents/App";
import Web from "./SubComponents/Web";
import Data from "./SubComponents/Data";
import Ai from "./SubComponents/Ai";
import Story from "./SubComponents/Story";
import Team from "./SubComponents/Team";
import Careers from "./SubComponents/Careers";
import Account from "./Components/Account";
import Forgot from "./Components/forgot";
import Reset from "./Components/Reset";
import Payment from "./Components/Payment";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter >
    <Routes>
      <Route element={<RootLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/enroll" element={<Enroll/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create-account" element={<Account/>} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/my-dashboard" element={<Dashboard/>} />
        <Route path="/forgot-password" element={<Forgot/>} />
        <Route path="/reset-password" element={<Reset/>} />
        <Route path="/overview" element={<OverView/>} />
        <Route path="/updates" element={<Update/>} />
        <Route path="/app-development" element={<App/>} />
        <Route path="/web-development" element={<Web/>} />
        <Route path="/data-science" element={<Data/>} />
        <Route path="/ai-ml" element={<Ai/>} />
        <Route path="/our-story" element={<Story/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/payment" element={<Payment/>} />

      </Route>
    </Routes>
  </BrowserRouter>,
);
