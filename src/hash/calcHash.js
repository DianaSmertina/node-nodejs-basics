import path from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const fileStream = createReadStream(filePath);
  const hash = createHash('sha256');

  fileStream.on('data', (data) => {
    hash.update(data);
  });

  fileStream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
