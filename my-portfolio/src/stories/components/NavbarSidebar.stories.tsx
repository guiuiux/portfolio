// .storybook/NavbarSidebar.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import NavbarSidebar from '../../components/NavbarSidebar';
import '../../app/globals.css'; // Ensure global styles are included
import '../../components/NavbarSidebar.module.css'; // Ensure component styles are included

export default {
  title: 'Components/NavbarSidebar',
  component: NavbarSidebar,
} as Meta;

const Template: Story = () => <NavbarSidebar />;

export const Default = Template.bind({});
