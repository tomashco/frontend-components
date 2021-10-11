import React from "react";

import { colors } from "@tomashco/minibit-ui.styles.colors";
import { typography } from "@tomashco/minibit-ui.styles.typography";
import classNames from "classnames";

import Card from "./card";

export const BasicCard = () => (
  <div className={classNames(colors, typography)}>
    <Card
      title="a generic card without image"
      text="this some text styled as paragraph"
      primaryBtnText="click me please"
      primaryBtnClickHandler={() => alert("button clicked!")}
      secondaryBtnText="I want it!"
      secondaryBtnClickHandler={() => alert("button clicked again!")}
    />
  </div>
);

export const cardWithImg = () => (
  <div className={classNames(colors, typography)}>
    <Card
      imgSrc="https://randomwordgenerator.com/img/picture-generator/54e1d3424d52ad14f1dc8460962e33791c3ad6e04e507440722d72d59144cd_640.jpg"
      title="a generic card"
      text="this some text styled as paragraph"
      primaryBtnText="click me please"
      primaryBtnClickHandler={() => alert("button clicked!")}
      secondaryBtnText="click me 2 times"
      secondaryBtnClickHandler={() => alert("button clicked again!")}
    />
  </div>
);

export const cardFoldable = () => (
  <div className={classNames(colors, typography)}>
    <Card
      foldable
      imgSrc="https://randomwordgenerator.com/img/picture-generator/54e1d3424d52ad14f1dc8460962e33791c3ad6e04e507440722d72d59144cd_640.jpg"
      title="a generic card"
      text="this some text styled as paragraph"
      primaryBtnText="click me please"
      primaryBtnClickHandler={() => alert("button clicked!")}
      secondaryBtnText="click me 2 times"
      secondaryBtnClickHandler={() => alert("button clicked again!")}
    />
  </div>
);

export const cardFoldableWithoutImg = () => (
  <div className={classNames(colors, typography)}>
    <Card
      foldable
      title="a generic card"
      text="this some text styled as paragraph"
      primaryBtnText="click me please"
      primaryBtnClickHandler={() => alert("button clicked!")}
      secondaryBtnText="click me 2 times"
      secondaryBtnClickHandler={() => alert("button clicked again!")}
    />
  </div>
);
