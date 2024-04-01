import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./navigation.scss";

export default function Navigation(props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (

    <header>
      <div className="site-header">
        <a href="/" title="Header info" className="header__title">
          <img
            src="./assets/Bozhidar-Andreev.jpg"
            alt="Photo of Bozhidar Andreev"
          />
          Bozhidar Andreev
        </a>
      </div>
      <nav className="navigationMenu">
        {/* Desktop Menu */}
        <ul className="desktopMenu">
          <li className="header__nav--item">
            <a href="/">Home</a>
          </li>
          <li className="header__nav--item">
            <a href="/#about-me">About Me</a>
          </li>
          <li className="header__nav--item">
            <a href="/#services">What i Do</a>
          </li>
          <li className="header__nav--item">
            <a href="/#summary">Resume</a>
          </li>
          <li className="header__nav--item">
            <a href="/#portfolio">Portfolio</a>
          </li>
          <li className="header__nav--item">
            <a href="/#testimonial">Testimonial</a>
          </li>
          <li className="header__nav--item">
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="mobileMenu">
          <button className="hamburgerIcon menu example9" onClick={toggleMobileMenu}>
          </button>
          {isMobileMenuOpen && (
            <ul className="mobileMenuItems">
              <li className="header__nav--item">
                <a href="/">Home</a>
              </li>
              <li className="header__nav--item">
                <a href="/#about-me">About Me</a>
              </li>
              <li className="header__nav--item">
              <a href="/#services">What I Do</a>
              </li>
              <li className="header__nav--item">
                <a href="/#summary">Resume</a>
              </li>
              <li className="header__nav--item">
                <a href="/#portfolio">Portfolio</a>
              </li>
              <li className="header__nav--item">
                <a href="/#testimonial">Testimonial</a>
              </li>
              <li className="header__nav--item">
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
         <li className="social-icons-linkedin icon-color-change">
           <a
            href="https://www.linkedin.com/in/bojidar-andreev-8b547124/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social-icons-phone icon-color-change">
          <a
            href="tel:00330769103620"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-phone"></i>
          </a>
        </li>
        <li className="social-icons-mail icon-color-change">
          <a
            href="mailto:andreev.bozhidar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </li>
        <li className="social-icons-github icon-color-change">
          <a
            href="https://github.com/bojidarandreev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}