import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import PageMenu from "@tomashco/minibit-ui.ui.page-menu";
import classNames from "classnames";
import styled, { css } from "styled-components";

const Page = styled.div`
  background: var(--primary-bg);
  height: 100vh;
  display: flex;
  justify-content: center;
  ${(props) =>
    props.boxed &&
    css`
      padding: 2em;
    `};
`;

const Container = styled.div`
  width: 90%;
  background: var(--primary-bg-heavy);
  height: 100vh;
  ${(props) =>
    props.boxed &&
    css`
      padding: 2em;
    `};
`;

export type PortfolioProps = {
  pageTitle: string;
  catchyPhrase?: string;
  menuItems: Array<Object>;
};

export function Portfolio({
  menuItems,
  pageTitle,
  catchyPhrase,
}: PortfolioProps) {
  return (
    <div className={classNames(colors, typography)}>
      <Page>
        <Container>
          <PageMenu toggleTheme items={menuItems} />
          {/* <PageTitle title={pageTitle} catchyPhrase={catchyPhrase} /> */}
        </Container>
      </Page>
    </div>
  );
}
