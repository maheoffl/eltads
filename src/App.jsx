import React from "react";
import Carosel from "./components/Carosel";
import Aboutus from "./components/Aboutus";
import Whyus from "./components/Whyus";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Head from "./components/Head";

const App = () => {
  return (
    <>
      <Head />
      <Carosel />
      <Aboutus />
      <Whyus />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
