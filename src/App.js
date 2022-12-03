import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <Contact />
    </>
  );
}

export default App;
