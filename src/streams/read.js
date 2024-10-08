import path from 'path';
import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  const fileStream = createReadStream(filePath);

  fileStream.on('data', (data) => {
    process.stdout.write(data);
  });

  fileStream.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();
