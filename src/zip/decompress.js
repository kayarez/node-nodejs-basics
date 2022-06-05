import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';
import * as util from 'node:util';

export const decompress = async () => {

    try {

        const pipe = util.promisify(stream.pipeline);
        const unzip = zlib.createUnzip();
        const source = fs.createReadStream('src/zip/files/archive.gz');
        const destination = fs.createWriteStream('src/zip/files/fileToCompress(dcmprs).txt');
        await pipe(source, unzip, destination);
        
    } catch (error) {

        console.error(error.message);
        
    }   

};

decompress();

