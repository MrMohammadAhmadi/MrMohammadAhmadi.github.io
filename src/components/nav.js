import React from "react";
import $ from "jquery";

const Nav = () => {
  $(function () {
    $(".nav-link").click(() => {
      $(".collapse").collapse("hide");
    });
  });
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="images/Ahmadi-Logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="collapsibleNavbar"
          aria-expanded="false"
          aria-label="نمایش فهرست"
        >
          <span className="navbar-toggler-icon">|||</span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav text-center nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://virgool.io/@sm.ahmadi77">
                <img
                  className="virgool-icon"
                  src="images/virgool-icon.png"
                  alt="virgool logo"
                />
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
