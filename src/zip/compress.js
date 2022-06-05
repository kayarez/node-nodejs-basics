import * as zlib from 'node:zlib';
import * as stream from 'node:stream';
import * as fs from 'node:fs';
import * as util from 'node:util';

export const compress = async () => {

    try {

        const pipe = util.promisify(stream.pipeline);
        const gzip = zlib.createGzip();
        const source = fs.createReadStream('src/zip/files/fileToCompress.txt');
        const destination = fs.createWriteStream('src/zip/files/archive.gz');
        await pipe(source, gzip, destination);
        
    } catch (error) {

        console.error(error.message);
        
    }   

};

compress();

