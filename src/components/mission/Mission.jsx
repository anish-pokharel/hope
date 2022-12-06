import React from "react";
import mission from "../../image/mission.webp";
import "./Mission.css";

const Mission = () => {
  return (
    <>
      {/* <section className="container padding ">
        <div className="flexSB ">
          <div className="left row padding">
            <h1>Our mission</h1>
            <p className="padding desc ">
              Our Mission Our mission is to empower people with a disability to
              engage in opportunities of their choice in a supported and
              inclusive environment.
            </p>
          </div>
          <div className="right row">
            <div className="img">
              <img src={mission} alt="" />
            </div>
          </div>
        </div>
      </section> */}

      <div className="flexMI height">
        <div className="right image">
          <img src={mission} alt="" />
        </div>
        <div className="left text">
          <h1>Our mission</h1>
          <p className="padding desc ">
            Our Mission Our mission is to empower people with a disability to
            engage in opportunities of their choice in a supported and inclusive
            environment.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;
