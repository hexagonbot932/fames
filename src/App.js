import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ScrollingText from "./components/ScrollingText";
import Collections from "./components/Collections";
import Filmstrip from "./components/Filmstrip";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import "./styles/lumenframes.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingText />
      <Collections />
      <Filmstrip />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
