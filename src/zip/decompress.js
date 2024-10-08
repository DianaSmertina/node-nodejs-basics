import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const archivePath = path.join(__dirname, 'files', 'archive.gz');
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');

  createReadStream(archivePath)
    .pipe(createGunzip())
    .pipe(createWriteStream(filePath))
};

await decompress();
