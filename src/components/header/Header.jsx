import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="header ">
        <div className="container headerflex ">
          <div className="left">
            <div className="icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
          <div className="right">
            <div className="icons">
              <i className="fas fa-phone">
                <span>1300424442</span>
              </i>
              <i class=" fas fa-file">
                <span>Important documents</span>
              </i>
              <i class="fas fa-user-plus">
                <span>Referrals</span>
              </i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
