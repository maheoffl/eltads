import React from 'react';
import Header from './components/Header';
import Carosel from './components/Carosel';
import Aboutus from './components/Aboutus';
import Whyus from './components/Whyus';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Carosel />
      <Aboutus />
      <Whyus />
      <Testimonials />
      <Footer/>
    </>
  )
}

export default App