import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Teams from '../components/sidebar/img/teams.svg'

import { SidebarNav, SidebarNavProps } from '../components/sidebar/SidebarNav';

export default {
  title: 'Sidebar/SidebarNav',
  component: SidebarNav,
} as Meta;

const Template: Story<SidebarNavProps> = (args) => <SidebarNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'test',
  img: Teams
};