import React from "react";

import { Meta } from "@storybook/react";

import Card from "./card";

export default {
  title: "inputs/Card",
  component: Card,
} as Meta;

const Template = (args) => <Card {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  imgSrc:
    "https://www.just-style.com/wp-content/uploads/sites/34/2021/07/2020-06-10-17-03-incontexttemplate_cropped_80-1.jpg",
  text: "I'm a fuckin' card",
};

// export const Secondary = Template.bind({});

// Secondary.args = {
//   children: 'Click Me!',
//   isLoading: false,
//   variant: 'secondary',
// };
