import React from "react";
// import "./Wrapper.css";

const Wrapper = () => {
  return (
    <>
      <div className="flexMI wrapper container">
        <div className="reg">
          <h3>We Are Registered NDIS Provider</h3>
          <button>Refer a participant</button>
        </div>
        <div className="advice">
          <h3>Looking For Advice?</h3>
          <p>
            Call us on 1300 424 442 to talk about your needs. Or fill out the
            form below and our Care Advisors will be in touch soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
