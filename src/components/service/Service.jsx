import React from "react";
import "./Service.css";
// import logo from "../../image/logo.png";
import data from "../service/ServiceData";

const Service = () => {
  return (
    <>
      <section className="service padding">
        <div>
          <h1>Our Services</h1>
        </div>
        <div className="data">
          <div className="flexSB">
            {data.map((val) => {
              return (
                <>
                  <div className="box " key={val.id}>
                    <div className="img">
                      <img src={val.logo} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                    <div className="btns">
                      <button>ReadMore</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
