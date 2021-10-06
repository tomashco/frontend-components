import React from "react";

import PageTitle from "@tomashco/minibit-ui.ui.page-title";
import styled from "styled-components";

const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
  @media (max-width: 680px) {
    flex-direction: column;
    transition: all 0.5s;
    align-items: center;
  }
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PersonalProjectsList = styled.div``;

const BootcampProjectsList = styled.div``;

export type PortfolioProjectsProps = {
  title: string;
  primaryProjects?: Array<Object>;
  primaryProjectsTitle?: string;
  secondaryProjects?: Array<Object>;
  secondaryProjectsTitle?: string;
};

export default function PortfolioProjects({
  title,
  primaryProjects,
  secondaryProjects,
  primaryProjectsTitle,
  secondaryProjectsTitle,
}: PortfolioProjectsProps) {
  return (
    <ProjectsListContainer>
      <TitleSection>
        <PageTitle title={title} />
      </TitleSection>

      {primaryProjects && primaryProjectsTitle && (
        <>
          <PageTitle title={primaryProjectsTitle} />
          {/* <PersonalProjectsList>{primaryProjects}</PersonalProjectsList> */}
        </>
      )}
      {secondaryProjects && secondaryProjectsTitle && (
        <>
          <PageTitle title={secondaryProjectsTitle} />
          {/* <BootcampProjectsList>{secondaryProjects}</BootcampProjectsList> */}
        </>
      )}
    </ProjectsListContainer>
  );
}
