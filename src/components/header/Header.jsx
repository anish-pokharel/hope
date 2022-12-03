import React, { useState } from "react";
import Head from "./Head";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/courses">All Courses</a>
            </li>
            <li>
              <a to="/about">About</a>
            </li>
            <li>
              <a to="/team">Team</a>
            </li>
            <li>
              <a to="/pricing">Pricing</a>
            </li>
            <li>
              <a to="/blog">Blog</a>
            </li>

            <li>
              <a to="/contact">Contact</a>
            </li>
          </ul>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
