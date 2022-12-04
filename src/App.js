import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mission from "./components/mission/Mission";

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
      <Mission />
      <Contact />
    </>
  );
}

export default App;
