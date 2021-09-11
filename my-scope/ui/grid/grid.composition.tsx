import React from "react";

import { mockProductList } from "@my-scope/mock.products";
import { Card } from "@my-scope/ui.card";

import { Grid } from "./grid";

export const BasicGrid = () => (
  <Grid>
    <>
      {mockProductList.forEach((item) => (
        <Card
          title={item.title}
          text={item.text}
          alt={item.alt}
          imgSrc={item.src}
          price={item.price}
          buttonText={item.buttonText}
        />
      ))}
    </>
  </Grid>
);
