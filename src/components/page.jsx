import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fotter from "./footer/Fotter";
import Header from "./header/Header";
import Mission from "./mission/Mission";
import Service from "./service/Service";
import Wrapper from "./wrapper/Wrapper";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
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
