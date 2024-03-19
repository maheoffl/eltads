import React from "react";
import Carosel from "./components/Carosel";
import Aboutus from "./components/Aboutus";
import Whyus from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <Nav />
      <Carosel />
      <Aboutus />
      <Whyus />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
