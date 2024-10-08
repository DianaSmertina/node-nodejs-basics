import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const filesDirPath = path.join(__dirname, 'files');

  try {
    try {
      const files = await fs.readdir(filesDirPath);
      files.forEach(file => {
        console.log(file);
      });
    } catch(error) {
      if (error.code === 'ENOENT') {
        throw new Error('FS operation failed');
      }
      console.error(error);
    }
  } catch(error) {
    console.error(error.message);
  }
};

await list();
