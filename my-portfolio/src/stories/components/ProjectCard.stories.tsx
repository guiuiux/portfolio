import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProjectCard, { ProjectCardProps } from '../../components/ProjectCard';
import projects from '../../app/data/projects'; // Adjust the import path if necessary
import '../../app/globals.css';

export default {
  title: 'Components/ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

const project = projects.find(p => p.slug === 'nylo');

export const Default = Template.bind({});
Default.args = {
  title: project.title,
  year: new Date(project.date).getFullYear().toString(),
  imageUrl: project.imageUrl, // Ensure the URL is correctly formatted
  videoUrl: project.videoUrl, // Ensure the URL is correctly formatted
};
