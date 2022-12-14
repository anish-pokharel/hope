import React from "react";
import homeimg from "../../image/he.jpg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <section>
        <div className="container1">
          <img src={homeimg} alt="" className="bghome" />
        </div>
        {/* <h1>Home hello</h1> */}
        {/* <img src="./he.jpg"></img> */}
      </section>
    </>
  );
};

export default Home;
