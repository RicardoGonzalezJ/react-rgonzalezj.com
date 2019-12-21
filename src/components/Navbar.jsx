import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#/">
        <img className="navbar-logo" src="../public/images/logo.png" alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#/">
              About
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/">Skills</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Experience
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#/">Full Stack Web Developer</a>
              <a className="dropdown-item" href="#/">Process Management</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#/">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/" tabIndex="-1" aria-disabled="true">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/" tabIndex="-1" aria-disabled="true">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/" tabIndex="-1" aria-disabled="true">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/" tabIndex="-1" aria-disabled="true">Blog</a>
          </li>
        </ul>
      </div>
      <div id="social-networks-right">
        <ul className="navbar-nav right-ul-nav">
          <li className="nav-item">
            <a
              className="btn btn-social-icon btn-twitter"
              href="##"
              target="blank"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-social-icon btn-linkedin"
              href="https://www.linkedin.com/in/ricardo-gonzalez-ba849822/"
              target="blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="btn btn-social-icon btn-github"
              href="https://www.github.com/RicardoGonzalezJ"
              target="blank"
            >
              <i className="fab fa-github-alt" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
