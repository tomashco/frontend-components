import React from "react";

import styled from "styled-components";

const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  font-size: 3.5em;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const TitleImg = styled.img`
  width: 30%;
  box-shadow: 20px 15px var(--primary-heavy);
  background: var(--primary-bg);
`;

export type PageTitleProps = {
  title: string;
  catchyPhrase?: string;
  titleImg?: string;
};

export default function PageTitle({
  title,
  catchyPhrase,
  titleImg,
}: PageTitleProps) {
  return (
    <PageTitleContainer>
      <Title>
        <h1>{title}</h1>
        {catchyPhrase && <h2>{catchyPhrase}</h2>}
      </Title>
      {titleImg && <TitleImg src={titleImg} alt={titleImg} />}
    </PageTitleContainer>
  );
}
