import "assets/css/bootstrap.css";
import "assets/css/style.css";

import Menu from "parts/Menu";
import Navbar from "parts/Navbar";
import Hero from "parts/Hero";
import Testimoni from "parts/Testimoni";
import Application from "parts/Application";
import Footer from "parts/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Hero></Hero>
        <Menu></Menu>
        <Testimoni></Testimoni>
        <Application></Application>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
