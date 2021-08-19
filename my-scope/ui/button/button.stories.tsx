import React from 'react';
import { Meta } from '@storybook/react';
import Button from './button';

export default {
  title: 'inputs/Button',
  component: Button,
} as Meta;

const Template = (args) => <Button {...args} />;

export const InDefaultState = Template.bind({});

InDefaultState.args = {
  children: 'Click Me!',
  isLoading: false,
};
