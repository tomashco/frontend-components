import React from "react";

import { mockProductList } from "@tomashco/minibit-ui.mock.products";
import Card from "@tomashco/minibit-ui.ui.card";

import Grid from "./grid";

export const BasicGrid = () => (
  <Grid>
    {mockProductList.map((item, itemindex) => (
      <Card
        key={itemindex}
        title={item.title}
        text={item.text}
        alt={item.alt}
        imgSrc={item.src}
        price={item.price}
        primaryBtnText={item.buttonText}
        primaryBtnClickHandler={() => alert(`card ${item.title} clicked`)}
      />
    ))}
  </Grid>
);
