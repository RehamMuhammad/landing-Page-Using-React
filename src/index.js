import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Productive from "./components/productive";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Features />
    <Productive />
    <Testimonials />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
