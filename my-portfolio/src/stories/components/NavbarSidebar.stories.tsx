import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NavbarSidebar from '../../components/NavbarSidebar';

export default {
  title: 'Components/NavbarSidebar',
  component: NavbarSidebar,
} as ComponentMeta<typeof NavbarSidebar>;

const Template: ComponentStory<typeof NavbarSidebar> = (args) => <NavbarSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithMenuOpen = Template.bind({});
WithMenuOpen.args = {
  // Use a useEffect or similar to open the menu when rendering this story
  menuOpen: true,
};
