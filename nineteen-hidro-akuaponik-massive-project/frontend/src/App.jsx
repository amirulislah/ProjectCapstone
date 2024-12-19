import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import FullArtikel from './pages/FullArtikel'
import About from './pages/About'
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import RouterComponent from "./pages/RouterComponent";


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/article/:id" element={<Artikel />} />
      <Route exact path="/article" element={<FullArtikel />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/Services" element={<Services />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/Register" element={<SignUp />} />
      <Route exact path="/RouterComponent" element={<RouterComponent />} />
    </Routes>
  );
}

export default App;
