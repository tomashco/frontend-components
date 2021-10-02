import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import PageMenu from "@tomashco/minibit-ui.ui.page-menu";
import classNames from "classnames";
import styled, { css } from "styled-components";

const Page = styled.div`
  background: var(--primary-bg);
  // height: 100vh;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
  }
  ${(props) =>
    props.boxed &&
    css`
      padding: 2em;
    `};
`;

const Container = styled.div`
  width: 90%;
  background: var(--primary-bg-heavy);
  padding: 2em 2em 2em 2em;
  ${(props) =>
    props.boxed &&
    css`
      margin: 2em 4em 2em 4em;
    `};
`;

const PageContent = styled.div``;
export type PagesContainerProps = {
  menuItems: Array<Object>;
  children: React.ReactElement;
};

export default function PagesContainer({
  menuItems,
  children,
}: PagesContainerProps) {
  return (
    <div className={classNames(colors, typography)}>
      <Page>
        <Container boxed>
          <PageMenu toggleTheme items={menuItems} />
          <PageContent>{children}</PageContent>
        </Container>
      </Page>
    </div>
  );
}
