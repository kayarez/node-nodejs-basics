import * as fs from 'node:fs'


export const write = async () => {

    const writeableStream = fs.createWriteStream('src/streams/files/fileToWrite.txt', 'utf-8');
    process.stdin.on('data', data => writeableStream.write(data));
};

write();