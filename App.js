import React from "react";
import "./App.css";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import About from "./About/About";
import Experience from "./Experience/Experience";

import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contacts/Contact";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
