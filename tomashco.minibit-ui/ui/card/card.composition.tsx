import React from "react";

import Card from "./card";

export const BasicCard = () => (
  <Card
    title="a generic card without image"
    text="this some text styled as paragraph"
    primaryBtnText="click me please"
    primaryBtnClickHandler={() => alert("button clicked!")}
    secondaryBtnText="I want it!"
    secondaryBtnClickHandler={() => alert("button clicked again!")}
  />
);
export const cardWithImg = () => (
  <Card
    imgSrc="https://randomwordgenerator.com/img/picture-generator/54e1d3424d52ad14f1dc8460962e33791c3ad6e04e507440722d72d59144cd_640.jpg"
    title="a generic card"
    text="this some text styled as paragraph"
    primaryBtnText="click me please"
    primaryBtnClickHandler={() => alert("button clicked!")}
    secondaryBtnText="click me 2 times"
    secondaryBtnClickHandler={() => alert("button clicked again!")}
  />
);
