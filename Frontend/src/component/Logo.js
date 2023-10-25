import React from "react";

function LogoHeading() {
  return(
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navfont navbar-brand" href="/">
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
      </div>
    </nav>
  );
}

export default LogoHeading;