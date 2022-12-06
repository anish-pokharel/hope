import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mission from "./components/mission/Mission";
import Wrapper from "./components/wrapper/Wrapper";
import Service from "./components/service/Service";
import Fotter from "./components/footer/Fotter";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}
      <Header />
      <Service />
      <Mission />
      <Wrapper />
      {/* <Contact /> */}
      <Fotter />
    </>
  );
}

export default App;
