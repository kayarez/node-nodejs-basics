import * as fs from "node:fs/promises";

export const read = async () => {
    try {
        if (!(await exists('src/fs/files/fileToRead.txt'))) {

            throw new Error("FS operation failed"); 
            
        } else {

            const promise = await fs.readFile('src/fs/files/fileToRead.txt',  { encoding: 'utf8' });
            console.log(promise);
            
        }
    } catch (error) {
        console.error(error.message);
    } 
};

const exists = async(path) =>{
    
    try {
        
        await fs.access(path);
        return true;
        
    } catch  {
        return false;
    }
    
};

read();