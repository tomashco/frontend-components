import React from "react";

import PageTitle from "@tomashco/minibit-ui.ui.page-title";
import SocialButtons from "@tomashco/minibit-ui.ui.social-buttons";
import styled from "styled-components";

const PageTitleContainer = styled.div`
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

const SocialSection = styled.div`
  display: flex;
  align-self: center;
  @media (max-width: 680px) {
    margin: 2em auto;
  }
`;

const TitleImg = styled.img`
  width: 18vw;
  box-shadow: 20px 15px var(--primary-heavy);
  background: var(--primary-bg);
  @media (max-width: 680px) {
    width: 10em;
  }
`;

export type PortfolioIntroProps = {
  title: string;
  catchyPhrase?: string;
  titleImg?: string;
  Linkedin?: string;
  GitHub?: string;
  Mail?: string;
};

export default function PortfolioIntro({
  title,
  catchyPhrase,
  titleImg,
  Linkedin,
  GitHub,
  Mail,
}: PortfolioIntroProps) {
  return (
    <PageTitleContainer>
      <TitleSection>
        <PageTitle title={title} secondaryTitle={catchyPhrase} />
        <SocialSection>
          <SocialButtons Linkedin={Linkedin} GitHub={GitHub} Mail={Mail} />
        </SocialSection>
      </TitleSection>
      {titleImg && <TitleImg src={titleImg} alt={titleImg} />}
    </PageTitleContainer>
  );
}
