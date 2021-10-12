import React from "react";

import {
  mockPersonalProjectsList,
  mockBootcampProjectsList,
} from "@tomashco/minibit-ui.mock.projects";
import PortfolioIntro from "@tomashco/minibit-ui.pages.portfolio-intro";
import PortfolioProjects from "@tomashco/minibit-ui.pages.portfolio-projects";
import { Route, Redirect } from "react-router-dom";

import fotoProfilo from "./fotoProfilo.png";
import PagesContainer from "./pages-container";

export const BasicPagesContainer = () => (
  <PagesContainer
    menuItems={[
      {
        ctaLink: "/projects",
        ctaText: "My projects",
        isInternal: true,
      },
      {
        ctaLink: "/about",
        ctaText: "About me",
        isInternal: true,
      },
      {
        ctaLink: "/contacts",
        ctaText: "Reach me out",
        isInternal: true,
      },
    ]}
  >
    <>
      <PortfolioIntro
        path="/about"
        exact={true}
        title="Tommaso Maioli"
        catchyPhrase="Just Another Fullstack Software Developer"
        titleImg={fotoProfilo}
        Linkedin="https://www.linkedin.com/in/tommasomaioli/"
        GitHub="https://github.com/tomashco"
        Mail="tommaso.maioli@gmail.com"
      />
      <PortfolioProjects
        path="/projects"
        exact={true}
        title="Projects"
        primaryProjects={mockPersonalProjectsList}
        secondaryProjects={mockBootcampProjectsList}
        primaryProjectsTitle="Personal Projects"
        secondaryProjectsTitle="Bootcamp Projects"
      />
      <Route path="/">
        <Redirect to="/about" />
      </Route>
    </>
  </PagesContainer>
);
