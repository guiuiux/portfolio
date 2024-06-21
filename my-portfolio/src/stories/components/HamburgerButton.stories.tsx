// src/components/HamburgerButton.stories.tsx

import React from 'react';
import { Meta, Story } from '@storybook/react';
import HamburgerButton, { HamburgerButtonProps } from '../../components/HamburgerButton';

export default {
  title: 'Components/HamburgerButton',
  component: HamburgerButton,
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the button is in open or closed state',
    },
  },
} as Meta;

const Template: Story<HamburgerButtonProps> = (args) => <HamburgerButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
