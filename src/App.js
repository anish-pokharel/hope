import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mission from "./components/mission/Mission";
import Wrapper from "./components/wrapper/Wrapper";
import Service from "./components/service/Service";
import Fotter from "./components/footer/Fotter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/service" element={<Service />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/wrapper" element={<Wrapper />} />
          {/* <Service />
          <Mission />
          <Wrapper /> */}

          {/* <Contact /> */}
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
}

export default App;
