import React, { useState } from "react";
import logo from "../../image/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header1">
        <div className="container n_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navlink">
            <ul>
              <li>
                <a href="Home">Home</a>
              </li>
              <li>
                <a href="about">about</a>
              </li>
              <li>
                <a href="our services">our services</a>
              </li>
              <li>
                <a href="Registered">Registered</a>
              </li>
              <li>
                <a href="referrals">referrals</a>
              </li>
              <li>
                <a href="contact">contact</a>
              </li>
              <li>
                <a href="work with us">work with us</a>
              </li>
              <li>
                <a href="documents">documents</a>
              </li>
              <li>
                <a href="blog">blog</a>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobile(!mobile)}>
              {mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
