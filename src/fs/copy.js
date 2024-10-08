import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const filesDirPath = path.join(__dirname, 'files');
  const filesCopyDirPath = path.join(__dirname, 'files_copy');

  try {
    try {
      await fs.access(filesDirPath);
    } catch (error) {
      throw new Error('FS operation failed');
    }

    try {
      await fs.access(filesCopyDirPath);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code === 'ENOENT') {
        try {
          await fs.mkdir(filesCopyDirPath);
          const files = await fs.readdir(filesDirPath);

          await Promise.all(files.map(async (file) => {
            const currentFile = path.join(filesDirPath, file);
            const copyFile = path.join(filesCopyDirPath, file);
            await fs.copyFile(currentFile, copyFile);
          }));
        } catch (e) {
          console.error(e)
        }
      } else {
        console.error(error.message)
      }
    }
  } catch (error) {
    console.error(error.message)
  }

};

await copy();
