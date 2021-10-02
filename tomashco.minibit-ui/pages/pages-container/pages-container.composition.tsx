import React from "react";

import PortfolioIntro from "@tomashco/minibit-ui.pages.portfolio-intro";

import fotoProfilo from "./fotoProfilo.png";
import PagesContainer from "./pages-container";

export const BasicPagesContainer = () => (
  <PagesContainer
    menuItems={[
      {
        ctaLink: "#",
        ctaText: "My projects",
      },
      {
        ctaLink: "#",
        ctaText: "About me",
      },
      {
        ctaLink: "#",
        ctaText: "Reach me out",
      },
    ]}
  >
    <PortfolioIntro
      title="Tommaso Maioli"
      catchyPhrase="Just Another Fullstack Software Developer"
      titleImg={fotoProfilo}
      Linkedin="https://www.linkedin.com/in/tommasomaioli/"
      GitHub="https://github.com/tomashco"
      Mail="tommaso.maioli@gmail.com"
    />
  </PagesContainer>
);
