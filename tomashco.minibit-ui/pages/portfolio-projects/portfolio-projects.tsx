import React from "react";

import Card from "@tomashco/minibit-ui.ui.card";
import Grid from "@tomashco/minibit-ui.ui.grid";
import PageTitle from "@tomashco/minibit-ui.ui.page-title";
import { Route } from "react-router-dom";
import styled from "styled-components";

const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleSection = styled.div``;

const PersonalProjectsList = styled.div``;

const BootcampProjectsList = styled.div``;

export type PortfolioProjectsProps = {
  title: string;
  primaryProjects?: Array<any>;
  primaryProjectsTitle?: string;
  secondaryProjects?: Array<any>;
  secondaryProjectsTitle?: string;
  path?: string;
  exact?: boolean;
};

export default function PortfolioProjects({
  title,
  primaryProjects,
  secondaryProjects,
  primaryProjectsTitle,
  secondaryProjectsTitle,
  path,
  exact,
}: PortfolioProjectsProps) {
  return (
    <Route exact={exact} path={path}>
      <ProjectsListContainer>
        <TitleSection>
          <PageTitle title={title} />
        </TitleSection>

        {primaryProjects && primaryProjectsTitle && (
          <>
            <PageTitle secondaryTitle={primaryProjectsTitle} />
            <PersonalProjectsList>
              <Grid>
                {primaryProjects.map((prj) => (
                  <Card
                    key={prj.title}
                    title={prj.title}
                    text={prj.description}
                    imgSrc={prj.src}
                    labels={prj.techStackLabels}
                    alt={prj.alt}
                    primaryBtnText={prj.primaryButtonText}
                    primaryBtnClickHandler={() =>
                      (window.location.href = prj.primaryButtonLink)
                    }
                    secondaryBtnText={prj.secondaryButtonText}
                    secondaryBtnClickHandler={() =>
                      (window.location.href = prj.secondaryButtonLink)
                    }
                  />
                ))}
              </Grid>
            </PersonalProjectsList>
          </>
        )}
        {secondaryProjects && secondaryProjectsTitle && (
          <>
            <PageTitle secondaryTitle={secondaryProjectsTitle} />
            <BootcampProjectsList>
              <Grid>
                {secondaryProjects.map((prj) => (
                  <Card
                    key={prj.title}
                    title={prj.title}
                    text={prj.description}
                    labels={prj.techStackLabels}
                    alt={prj.alt}
                    imgSrc={prj.src}
                    primaryBtnText={prj.primaryButtonText}
                    primaryBtnClickHandler={() =>
                      (window.location.href = prj.primaryButtonLink)
                    }
                    secondaryBtnText={prj.secondaryButtonText}
                    secondaryBtnClickHandler={() =>
                      (window.location.href = prj.secondaryButtonLink)
                    }
                  />
                ))}
              </Grid>
            </BootcampProjectsList>
          </>
        )}
      </ProjectsListContainer>
    </Route>
  );
}
