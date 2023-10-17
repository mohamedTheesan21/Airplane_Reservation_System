import React from "react";

function Navbar(props) {
  // bg-body-tertiary
  return (
    <nav className="blackNavbar navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navfont navbar-brand" href="">
          B Airline
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="navfont nav-link active"
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="navfont nav-link" href="/seatselection">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="navfont nav-link" href="/booking">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {};

export default Navbar;
