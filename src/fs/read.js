import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    try {
      const contents = await fs.readFile(filePath, { encoding: 'utf8' });
      console.log(contents);
    } catch(error) {
      if (error.code === 'ENOENT') {
        throw new Error('FS operation failed');
      }
      console.error(error);
    }
  } catch (error) {
    console.error(error.message);
  }
};

await read();
