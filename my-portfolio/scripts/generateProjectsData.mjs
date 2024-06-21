import fs from 'fs-extra';
import path from 'path';
import { pathToFileURL } from 'url';

const piecesDir = path.join(process.cwd(), 'src/app/pieces');
const publicPiecesDir = path.join(process.cwd(), 'public/pieces');
const outputDir = path.join(process.cwd(), 'src/app/data');
const outputFile = path.join(outputDir, 'projects.js');

const categories = ['experimental', 'work'];

const extractMeta = async (filePath) => {
  const metaURL = pathToFileURL(filePath);
  const { default: meta } = await import(metaURL.href);
  return meta;
};

const findThumbnail = (metaPath) => {
  const files = fs.readdirSync(metaPath);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      return file;
    }
  }
  return null;
};

const checkFileExists = async (filePath) => {
  try {
    const exists = await fs.pathExists(filePath);
    return exists;
  } catch (err) {
    console.error(`Error checking file: ${filePath}`, err);
    return false;
  }
};

const generateProjectsData = async () => {
  const projects = [];

  for (const category of categories) {
    const categoryPath = path.join(piecesDir, category);

    // Check if the category directory exists
    if (!(await checkFileExists(categoryPath))) {
      console.warn(`Category directory ${categoryPath} does not exist. Skipping...`);
      continue;
    }

    const pieces = await fs.readdir(categoryPath);

    for (const piece of pieces) {
      const piecePath = path.join(categoryPath, piece);
      const metaPath = path.join(piecePath, 'meta.js');
      const pagePath = path.join(piecePath, 'page.tsx');
      const publicMetaPath = path.join(publicPiecesDir, category, piece);

      if (await checkFileExists(metaPath) && await checkFileExists(pagePath)) {
        const meta = await extractMeta(metaPath);
        const thumbFile = findThumbnail(publicMetaPath);
        const thumb = thumbFile ? path.join('pieces', category, piece, thumbFile) : null;
        const video = path.join('pieces', category, piece, 'video.webm');

        // Detailed debugging information
        console.log(`Checking video file for project: ${piece} in category: ${category}`);
        console.log(`Video file path: ${video}`);
        console.log(`Checking thumbnail file: ${thumb}`);

        if (!thumb) {
          console.error(`Thumbnail not found for ${piece} in ${category}`);
          continue;
        }

        const videoExists = await checkFileExists(path.join(publicMetaPath, 'video.webm'));
        if (!videoExists) {
          console.error(`Video file not found for ${piece} in ${category}`);
          continue;
        }

        projects.push({
          ...meta,
          imageUrl: `/${thumb.replace(/\\/g, '/')}`,
          videoUrl: `/${video.replace(/\\/g, '/')}`,
          slug: piece,
          category: category
        });
      }
    }
  }

  if (!await checkFileExists(outputDir)) {
    await fs.mkdir(outputDir, { recursive: true });
  }

  await fs.writeFile(outputFile, `const projects = ${JSON.stringify(projects, null, 2)};\n\nexport default projects;`);
  console.log(`Projects data generated at ${outputFile}`);
};

generateProjectsData().catch(err => {
  console.error(err);
  process.exit(1);
});
