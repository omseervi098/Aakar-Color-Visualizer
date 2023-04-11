import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ColorVisualiser from "./pages/ColorVisualiser/ColorVisualiser";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/colorvisualiser" element={<ColorVisualiser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
