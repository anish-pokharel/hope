import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fotter from "./footer/Fotter";
import Header from "./header/Header";
import Home from "./home/Home";
import Mission from "./mission/Mission";
import Service from "./service/Service";
import Trust from "./trust/Trust";
import Wrapper from "./wrapper/Wrapper";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trust" element={<Trust />} />
          <Route path="/service" element={<Service />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/wrapper" element={<Wrapper />} />
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
};

export default Page;
