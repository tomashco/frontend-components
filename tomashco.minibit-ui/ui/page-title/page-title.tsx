import React from "react";

import styled from "styled-components";

const Title = styled.div`
  h1 {
    font-size: 2vw;
  }
  h2 {
    font-size: 3vw;
  }
  display: flex;
  flex-direction: column;
  @media (max-width: 680px) {
    h1 {
      font-size: 1em;
    }
    h2 {
      font-size: 1.5em;
    }
  }
`;

export type PageTitleProps = {
  title?: string;
  secondaryTitle?: string;
};

export default function PageTitle({ title, secondaryTitle }: PageTitleProps) {
  return (
    <Title>
      <h1>{title}</h1>
      {secondaryTitle && <h2>{secondaryTitle}</h2>}
    </Title>
  );
}
