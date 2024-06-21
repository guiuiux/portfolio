import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';

const piecesDir = path.join(process.cwd(), 'src/app/pieces');
const publicPiecesDir = path.join(process.cwd(), 'public/pieces');

const questions = [
  {
    type: 'list',
    name: 'category',
    message: 'Is it WORK or EXPERIMENTAL?',
    choices: ['work', 'experimental'],
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Project name:',
    validate: function (input) {
      if (/^[a-z0-9-]+$/.test(input)) {
        return true;
      }
      return 'Project name should be in kebab-case (lowercase letters, numbers, and hyphens only)';
    },
  },
];

const createProject = async () => {
  const answers = await inquirer.prompt(questions);
  const { category, projectName } = answers;

  const projectPath = path.join(piecesDir, category, projectName);
  const metaPath = path.join(publicPiecesDir, category, projectName);

  if (fs.existsSync(projectPath)) {
    console.log(`Project folder ${projectPath} already exists. Choose a different name.`);
    return;
  }

  if (fs.existsSync(metaPath)) {
    console.log(`Meta folder ${metaPath} already exists. Choose a different name.`);
    return;
  }

  // Create folders
  fs.mkdirSync(projectPath, { recursive: true });
  fs.mkdirSync(metaPath, { recursive: true });

  // Create meta.js with template content
  const metaContent = `\
const meta = {
  title: "${projectName.replace(/-/g, ' ')}",
  date: "${new Date().toISOString().split('T')[0]}",
  tags: [],
  tools: []
};

export default meta;
`;

  fs.writeFileSync(path.join(projectPath, 'meta.js'), metaContent);

  // Create page.tsx with template content
  const pageContent = `\
"use client";

import React from 'react';
import meta from './meta';

const PiecePage = () => {
  return (
    <div>
      <h1>{meta.title}</h1>
      <p>Project Date: {meta.date}</p>
      <p>Tags: {meta.tags.join(', ')}</p>
      <p>Tools: {meta.tools.join(', ')}</p>
      {/* More content here */}
    </div>
  );
};

export default PiecePage;
`;

  fs.writeFileSync(path.join(projectPath, 'page.tsx'), pageContent);

  // Instructions for adding media files
  console.log(`Project created at ${projectPath}`);
  console.log(`Please add the following files to the ${metaPath} directory:`);
  console.log(`- thumb.webp: The thumbnail image for the project.`);
  console.log(`- video.webm: The video preview for the project.`);
};

createProject();
