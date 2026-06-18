import React from "react";
import ProjectCargoHero from "../components/ServicesComponents/SubSections/ProjectCargo/ProjectCargoHero";
import ProjectCargoOverview from "../components/ServicesComponents/SubSections/ProjectCargo/ProjectCargoOverview";
import ProjectCargoDeliver from "../components/ServicesComponents/SubSections/ProjectCargo/ProjectCargoDeliver";
import AboutCTA from "../components/About/AboutCTA";
import Footer from "../components/Footer/Footer";

const ProjectCargo = () => {
  return (
    <>
      <ProjectCargoHero />
      <ProjectCargoOverview />
      <ProjectCargoDeliver />
      <AboutCTA />
      <Footer />
    </>
  );
};

export default ProjectCargo;
