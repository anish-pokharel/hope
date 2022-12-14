import React from "react";
import Title from "../common/Title";
import "./Trust.css";
import about from "../../image/about.jpg";
const Trust = () => {
  return (
    <>
      <section className="container">
        <Title title="We're All About Trust" />
        <div className="flexSB">
          <div className="left row">
            <div className="aboutimg">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="right row">
            <div className="para">
              <p>
                Hope Ability management has years of experience in disability
                services along with extensive experience in customer focused
                public and private sector. Our vision is to empower participants
                to take ownership of their life.
              </p>
              <div className="button">
                <button>About Hope Ability </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust;
