import React from 'react';
import { Meta } from '@storybook/react';
import Button from './button';

export default {
  title: 'inputs/Button',
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Click Me!',
  isLoading: false,
  variant: 'primary',
  className: 'foo asdf',
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: 'Click Me!',
  isLoading: false,
  variant: 'secondary',
};
