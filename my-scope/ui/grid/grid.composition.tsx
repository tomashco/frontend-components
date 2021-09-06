import React from 'react';
import { Grid } from './grid';
import { Card } from '@my-scope/ui.card'

export const BasicGrid = () => (
  <Grid container >
    <Grid row >
      <Card 
        imgSrc='https://randomwordgenerator.com/img/picture-generator/54e1d3424d52ad14f1dc8460962e33791c3ad6e04e507440722d72d59144cd_640.jpg'
        title='The first'
        text='this is card 1'
        />
      <Card
        imgSrc='https://randomwordgenerator.com/img/picture-generator/54e8d4464e51a814f1dc8460962e33791c3ad6e04e507440752f72d7954ec4_640.jpg'
        title='The second'
        text='this is card 2'
        />
      <Card
        imgSrc='https://randomwordgenerator.com/img/picture-generator/gae45c3737ca3f55f20e1eec2d3d58f1d5bb6a5544872670f170a02bce2ce5c5ae57adad2511fedb76f3fef7733421f1e_640.jpg'
        title='The third'
        text='this is card 3'
        />
      <Card
        imgSrc='https://randomwordgenerator.com/img/picture-generator/54e0d7424f52b10ff3d8992cc12c30771037dbf85254794075287cd2954e_640.jpg'
        title='The fourth'
        text='this is card 4'
        />
    </Grid>
  </Grid>
);
