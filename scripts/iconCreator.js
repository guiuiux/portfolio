import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconsDir = path.join(__dirname, "../src/assets/icons"); // Folder containing SVGs
const outputDir = path.join(__dirname, "../src/components/icons"); // Output directory for components

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function generateComponentName(fileName) {
  // Convert file name (e.g., chevron-left.svg) to PascalCase (ChevronLeft)
  return fileName
    .replace(/-./g, (match) => match[1].toUpperCase())
    .replace(/\.svg$/, "")
    .replace(/^\w/, (c) => c.toUpperCase());
}

function createReactComponent(svgContent, componentName) {
  const $ = cheerio.load(svgContent, null, false);

  // Remove any existing fill attributes to allow color customization
  $("*").removeAttr("fill");

  // Wrap SVG content in a React component string
  const component = `
import React from 'react';
import PropTypes from 'prop-types';

const ${componentName} = ({ color = "currentColor", size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    ${$("svg").html()}
  </svg>
);

${componentName}.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default ${componentName};
  `;

  return component;
}

function generateComponents() {
  const svgFiles = fs
    .readdirSync(iconsDir)
    .filter((file) => path.extname(file) === ".svg");

  svgFiles.forEach((file) => {
    const filePath = path.join(iconsDir, file);
    const svgContent = fs.readFileSync(filePath, "utf-8");

    const componentName = generateComponentName(file);
    const componentContent = createReactComponent(svgContent, componentName);

    // Write the React component file
    fs.writeFileSync(
      path.join(outputDir, `${componentName}.jsx`),
      componentContent,
      "utf-8"
    );

    console.log(`Generated component: ${componentName}`);
  });

  console.log(`\nGenerated ${svgFiles.length} SVG components in ${outputDir}`);
}

// Run the script
generateComponents();
