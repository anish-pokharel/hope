import React from "react";
import "./Wrapper.css";

const Wrapper = () => {
  return (
    <>
      <section className="container">
        <div className="flexSB padding margin ">
          <div className="reg">
            <h2>We Are Registered NDIS Provider</h2>
            <button className="reg-btn"> Refer a participany</button>
          </div>
          <div className="advice">
            <h2>Looking for Advice?</h2>
            <p>
              Call us on 1300 424 442 to talk about your needs. Or fill out the
              form below and our Care Advisors will be in touch soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wrapper;
