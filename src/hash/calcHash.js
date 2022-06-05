import * as crypto from 'crypto';
import * as fs from 'node:fs/promises';

export const calculateHash = async () => {

    try {

        const data = await fs.readFile('files/fileToCalculateHashFor.txt', { encoding: 'utf8' });
        const hash = await crypto.createHash('sha256').update(data).digest('hex');
        console.log(hash);
        
    } catch (error) {

        console.error(error.message);
        
    }   

};

calculateHash();