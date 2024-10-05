import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const filesDir = path.join(__dirname, 'files');
  const wrongFilenamePath = path.join(filesDir, 'wrongFilename.txt');
  const properFilenamePath = path.join(filesDir, 'properFilename.md');

  try {
    try {
      await fs.access(wrongFilenamePath);
    } catch (error) {
      throw new Error('FS operation failed');
    }

    try {
      await fs.access(properFilenamePath);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code === 'ENOENT') {
        fs.rename(wrongFilenamePath, properFilenamePath)
      } else {
        console.error(error.message)
      }
    }

  } catch (error) {
    console.error(error.message)
  }
};

await rename();
