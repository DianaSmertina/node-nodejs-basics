import { Transform } from 'stream';

const transform = async () => {
  class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').reverse().join(''));
      callback();
    }
  }
  const stream = new ReverseTransform();
  process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();
