import * as fs from 'node:fs';

export const read = async () => {
    const readableStream = fs.createReadStream('src/streams/files/fileToRead.txt', 'utf-8');
    readableStream.on('data', chunk => process.stdout.write(chunk));
};

read();