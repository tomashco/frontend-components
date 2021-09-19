import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";
import styled from "styled-components";

import PageMenu from "./page-menu";

const Container = styled.div`
  background: var(--primary-bg);
  height: 100vh;
`;

export const BasicPageMenu = () => (
  <div className={classNames(colors, typography)}>
    <Container>
      <PageMenu
        toggleTheme
        items={[
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
      />
    </Container>
  </div>
);
