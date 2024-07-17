import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="line"></div>
        <div className="last">
          <div className="copyright">
            @2024 PRAKHAR SRIVASTAVA ALL RIGHTS RESERVED
          </div>
          <div className="links">
            <a href="mailto:prakharsrivastava2857@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/prakhar5/">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/prakharr5">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
