import React from 'react';
import { Story, Meta } from '@storybook/react';
import AnimatedIcon, { AnimatedIconProps } from '../../components/AnimatedIcon'; // Ensure the correct import path
import hamburgerAnimation from '../../../public/lottie/hamburger-close.json'; // Example Lottie animation

export default {
  title: 'Components/AnimatedIcon',
  component: AnimatedIcon,
  argTypes: {
    animationData: {
      control: {
        type: 'select',
        options: {
          Hamburger: hamburgerAnimation,

          // Add more animations here
        },
      },
    },
    clickToggle: { control: 'boolean' },
    size: {
      control: {
        type: 'select',
        options: ['Small', 'Medium', 'Large'],
      },
    },
  },
} as Meta;

const Template: Story<AnimatedIconProps> = (args) => <AnimatedIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  animationData: hamburgerAnimation,
  initialFrame: 5,
  playFrames: [5, 35],
  clickToggle: true,
  size: 'medium',
};