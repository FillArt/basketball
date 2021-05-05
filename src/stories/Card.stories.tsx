import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Test from '../components/dashboard/img/test-logo.svg'

import { Card, CardProps } from '../components/dashboard/Card';

export default {
  title: 'Dashboard/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Testing',
  year: 1990,
  imgPath: Test
};