import React from "react";

import {
  mockPersonalProjectsList,
  mockBootcampProjectsList,
} from "@tomashco/minibit-ui.mock.projects";

import PortfolioProjects from "./portfolio-projects";

export const BasicPortfolioProjects = () => (
  <PortfolioProjects
    title="Projects"
    primaryProjects={mockPersonalProjectsList}
    secondaryProjects={mockBootcampProjectsList}
    primaryProjectsTitle="Personal Projects"
    secondaryProjectsTitle="Bootcamp Projects"
  />
);
