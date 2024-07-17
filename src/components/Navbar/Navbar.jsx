import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <b>PRAKHAR</b>
        </div>
        <div className="resume">
          <a href="https://drive.google.com/file/d/1qlEoCFpFFQeWb5pOwlCFh0rjAqZ3P-bN/view?usp=sharing">
            RESUME
            <i className="fa-solid fa-clone"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
