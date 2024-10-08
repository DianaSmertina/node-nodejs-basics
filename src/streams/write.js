import path from 'path';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

  const fileStream = createWriteStream(filePath);

  process.stdin.on('data', (data) => {
    fileStream.write(data);
  });

  process.stdin.on('end', () => {
    fileStream.end();
  });
};

await write();
