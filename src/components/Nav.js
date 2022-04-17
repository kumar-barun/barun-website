import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Barun Kumar logo" />
          </Link>
        </div>
        <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="close">&times;</span>
          ) : (
            <span>&#9776;</span>
          )}
        </div>
        {isOpen && (
          <ul onClick={() => setIsOpen(!isOpen)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills &amp; Experience</Link>
            </li>
            <li>
              <Link to="/my-work">My Works</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
