import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    await fs.access(filePath);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      try {
        await fs.writeFile(filePath, 'I am fresh and young', 'utf-8');
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error(error.message);
    }
  }
};

await create();
