import React from "react";
import CrossTradeHero from "../components/ServicesComponents/SubSections/CrossTrade/CrossTradeHero";
import CrossTradeOverview from "../components/ServicesComponents/SubSections/CrossTrade/CrossTradeOverview";
import CrossTradeAgentNetworkMap from "../components/ServicesComponents/SubSections/CrossTrade/CrossTradeAgentNetworkMap";
import AboutCTA from "../components/About/AboutCTA";
import Footer from "../components/Footer/Footer";

const CrossTrade = () => {
  return (
    <>
      <CrossTradeHero />
      <CrossTradeOverview />
      <CrossTradeAgentNetworkMap />
      <AboutCTA />
      <Footer />
    </>
  );
};

export default CrossTrade;
