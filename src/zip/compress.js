import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const archivePath = path.join(__dirname, 'files', 'archive.gz');

  createReadStream(filePath)
    .pipe(createGzip())
    .pipe(createWriteStream(archivePath))
};

await compress();
