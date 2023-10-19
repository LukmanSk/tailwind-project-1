import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Team />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
