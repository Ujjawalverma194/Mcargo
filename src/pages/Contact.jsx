import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactFormSection from "../components/Contact/ContactFormSection";
import ContactAdvisoryServices from "../components/Contact/ContactAdvisoryServices";
import ContactMapSection from "../components/Contact/ContactMapSection";
import ContactTradeHubs from "../components/Contact/ContactTradeHubs";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <ContactFormSection />

      <ContactAdvisoryServices />
      <ContactMapSection />
      <ContactTradeHubs />
      <Footer />
    </>
  );
};

export default Contact;
