import React from "react";
import "./app.css"
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ColorVisualiser from "./pages/ColorVisualiser/ColorVisualiser";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/colorvisualiser" element={<ColorVisualiser />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
