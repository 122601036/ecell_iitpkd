import Home from "../components/Home"
import Navbar from "../components/Navbar";


import React from "react";
import { Router,Route,Routes } from "react-router-dom";
import AllEvents from "../components/pages/AllEvents.jsx";
import Contacts from "../components/pages/Contacts.jsx";
import './App.css'
import RightNavBar from "../components/RightNavBar.jsx";
import Footer from "../components/Footer.jsx";
function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <RightNavBar/> */}
    {/* <Router> */}  
    {/* if Router is present then it is not rendering the website */}
        <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/allevents" element={<AllEvents></AllEvents>}></Route>
                  <Route path="/contact" element={<Contacts></Contacts>}></Route>
      </Routes>
    {/* </Router> */}
    
      
    </>
  );
}

export default App
