import React from "react";

import { typography } from "@minibit-ui/styles.typography";
import { Meta } from "@storybook/react";

import Button from "./button";

export default {
  title: "inputs/Button",
  component: Button,
} as Meta;

const Template = (args) => (
  <div className={typography}>
    <Button onClick={() => alert("on click")} {...args}>
      Click me!
    </Button>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  // children: 'Click Me!',
  isLoading: false,
  variant: "primary",
};

export const Secondary = Template.bind({});

Secondary.args = {
  // children: 'Click Me!',
  isLoading: false,
  variant: "secondary",
};
