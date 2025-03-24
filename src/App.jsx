import React, { useRef } from "react";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import Footer from "./Footer";
import Certificate from "./Certificate";
import Aboutus from "./Aboutus";
import Naics from "./Naics";
import Services from "./Services";
import Whyus from "./Whyus";
import PastExp from "./PastExp";

function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const whyusRef = useRef(null);
  const pastExpRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      {/* Pass refs to Navbar for navigation */}
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        whyusRef={whyusRef}
        pastExpRef={pastExpRef}
        contactRef={contactRef}
      />

      {/* Sections with refs */}
      <section ref={homeRef} id="home">
        <Homepage />
      </section>
      <section ref={aboutRef} id="about">
        <Aboutus />
      </section>

      <section ref={servicesRef} id="services">
        <Services />
      </section>

      <section ref={whyusRef} id="whyus">
        <Whyus />
      </section>

      <section ref={pastExpRef} id="pastExp">
        <PastExp />
      </section>

      <section ref={contactRef} id="contact">
        <Footer />
      </section>
    </>
  );
}

export default App;
