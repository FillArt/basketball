import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/ui/Button';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const Add = Template.bind({});
Add.args = {
  label: 'Add',
  add: true,
  type: 'button'
};

export const Cancel = Template.bind({});
Cancel.args = {
  label: 'Cancel',
  cancel: true,
  type: 'button'
}