import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="App">
      <div className="container header__container">
        <h3 className="header__start">Hello I am </h3>
        <h1 className="header__start">Pratik Dhumal</h1>
        <h5 className="text-light">MERN STACK Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
