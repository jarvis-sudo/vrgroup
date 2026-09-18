import React from "react";

import AboutHero from "./AboutHeroAu";
import OurStory from "./OurStoryAu";
import StatsBar from "./StatsBarAu";
import GroupCompanies from "./GroupCompaniesAu";
import OurValues from "./OurValuesAu";
import TeamSection from "./TeamSectionAu";
import AboutCTA from "./AboutCTAAu";

/* =========================================================
   ABOUT US PAGE

   Composes the individual About Us components in order.
   Each section below is its own file — edit independently
   or reorder as needed.
========================================================= */

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white text-[#071a33]">
      <AboutHero />
      <StatsBar />
      <OurStory />
      <GroupCompanies />
      <OurValues />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}
