import { Transform } from 'node:stream';

export const transform = async () => {

    const revTr = new Transform({
        transform(chunk, encoding, callback) {
          this.push(chunk.toString().split("").reverse().join(""));
          callback();
        }
      });
      
      process.stdin.pipe(revTr).pipe(process.stdout);
};

transform();