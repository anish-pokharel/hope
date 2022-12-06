import React from "react";
import "./Fotter.css";

const Fotter = () => {
  return (
    <>
      <footer>
        <div className="flexMI footer">
          <div className="right">
            <h2>Hope Ability</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              enim obcaecati vitae nesciunt quibusdam sed nisi, debitis voluptas
              facere itaque reprehenderit quam fugit eius nostrum.
            </p>
          </div>
          <div className="left">
            <div className="boxfooter">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Our Service</li>
                <li>Registered</li>
                <li>Refferals</li>
              </ul>
            </div>
            <div className="boxfooter">
              <ul>
                <li>Contact</li>
                <li>Work With US</li>
                <li>Documents</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="boxfooter">
              <li>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
              </li>
            </div>
          </div>
        </div>
        <div className="footerright">
          <p>© 2021. All rights reserved by ADK</p>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
