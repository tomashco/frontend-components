import React from 'react';
import { Meta } from '@storybook/react';
// import Typography from '@bit/mui-org.material-ui.typography';

import Button from './button';

export default {
  title: 'inputs/Button',
  component: Button,
} as Meta;

const Template = (args) =>
  <Button
    onClick={() => alert('on click')}
    {...args}
    children={<h1>Click me!</h1>}
    />;

export const Primary = Template.bind({});

Primary.args = {
  // children: 'Click Me!',
  isLoading: false,
  variant: 'primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  // children: 'Click Me!',
  isLoading: false,
  variant: 'secondary',
};
