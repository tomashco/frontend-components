import React, { useState } from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import ToggleButton from "@tomashco/minibit-ui.ui.toggle-button";
import classNames from "classnames";
import styled, { css } from "styled-components";

// import styles from "./page-menu.module.scss";

const StyledPageMenu = styled.div`
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
// add this inside style to add conditional styling
// ${(props) =>
//   props.primary &&
//   css`
//     background: palevioletred;
//     color: white;
// `};

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  height: 100%;  
    a {
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      background: transparent; 
      padding: 0 1em 0 1em;
      margin: 0 0.3em 0 0.3em;
      color: var(--primary-color);
      border: 4px solid var(--primary-color);
      border-radius: 3em;
      transition: all 0.2s ease-out;
    }
    a:hover,
    a:focus {
      color: #FFFFFF;
      background: var(--primary-color);
      border: 4px solid var(--primary-color);
    }
  }
`;

export type PageMenuProps = {
  items: Array<Object>;
  toggleTheme?: boolean;
};

export default function PageMenu({ items, toggleTheme }: PageMenuProps) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const themeInverted = currentTheme === "dark" ? "light" : "dark";
  return (
    <StyledPageMenu className={classNames(typography, colors)}>
      <StyledMenuList>
        {items.map(
          (
            menuItem: { ctaLink: string; ctaText: string },
            itemIndex: number
          ) => (
            <li key={itemIndex}>
              <a href={menuItem.ctaLink}>{menuItem.ctaText}</a>
            </li>
          )
        )}
      </StyledMenuList>
      {toggleTheme && (
        <ToggleButton
          clickHandler={(e) => {
            document.documentElement.setAttribute("data-theme", themeInverted);
            (e.target as HTMLInputElement).value &&
              setCurrentTheme(themeInverted);
          }}
        />
      )}
    </StyledPageMenu>
  );
}
