import React, { useState } from "react";

import ToggleButton from "@tomashco/minibit-ui.ui.toggle-button";
import styled, { css } from "styled-components";

import { burgerIcon } from "./helper";

// import styles from "./page-menu.module.scss";

const StyledPageMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const StyledToggleButton = styled.div`
  scale: 0.4;
  margin-right: -3.9em;
`;

const CollapsibleMenu = styled.div`
  label {
    margin: 1em 0 0 0;
    @media (min-width: 768px) {
      display: none;
      margin: 1em 0 0 0;
    }
    display: inline-block;
    cursor: pointer;
    color: var(--primary-color);
    background: var(--primary-color);
    -webkit-mask-image: url("${burgerIcon("#000")}");
    mask-image: url("${burgerIcon("#000")}");
    width: 17px;
    height: 47px;
    padding: 10px 0 10px 50px;
  }
  input#menu {
    display: none;
  }
`;

const StyledMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  li {
    margin-top: 1.5em;
  }
  @media (max-width: 768px) {
    opacity: ${(props) => (props.state ? "1" : "0")};
    flex-direction: column;
    margin: 0;
    transition: all 0.5s;
    li {
      margin-top: 0;
      display: ${(props) => (props.state ? "block" : "none")};
      padding-top: 1em;
      :last-child {
        margin-bottom: 1em;
      }
    }
  }

  a {
    height: 3em;
    display: flex;
    align-items: center;
    text-decoration: none;
    background: var(--secondary-button);
    padding: 0 1em 0 1em;
    margin: 0 0.3em 0 0.3em;
    color: var(--primary-color);
    border: 4px solid var(--primary-color);
    border-radius: 3em;
    transition: all 0.2s ease-out;
  }
  a:hover,
  a:focus {
    color: #ffffff;
    background: var(--primary-color);
    border: 4px solid var(--primary-color);
  }
`;

export type PageMenuProps = {
  items: Array<Object>;
  toggleTheme?: boolean;
};

export default function PageMenu({ items, toggleTheme }: PageMenuProps) {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);
  const themeInverted = currentTheme === "dark" ? "light" : "dark";

  return (
    <StyledPageMenu>
      <CollapsibleMenu>
        <input
          type="checkbox"
          id="menu"
          onClick={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="menu">Menu</label>
        <StyledMenuList state={isChecked}>
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
      </CollapsibleMenu>
      {toggleTheme && (
        <StyledToggleButton>
          <ToggleButton
            clickHandler={(e) => {
              document.documentElement.setAttribute(
                "data-theme",
                themeInverted
              );
              (e.target as HTMLInputElement).value &&
                setCurrentTheme(themeInverted);
            }}
          />
        </StyledToggleButton>
      )}
    </StyledPageMenu>
  );
}
