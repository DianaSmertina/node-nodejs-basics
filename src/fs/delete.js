import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const deleteFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');

  try {
    try {
      await fs.rm(deleteFilePath);
    } catch (error) {
      throw new Error('FS operation failed');
    }
  } catch(e) {
    console.error(e.message);
  }
};

await remove();
