


import React from "react";
import Footer from "./components/Footer";
import Customize from "./components/customize";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  exact path = "/" element= {<Home/>}/>
      <Route exact path = "/customize" element ={<Customize/>}/>
    </Routes>
    <Footer/>
    </>
  );
};

export default App;

