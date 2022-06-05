import * as fs from "node:fs/promises";

export const rename = async () => {
    try {

        if(!(await exists('src/fs/files/wrongFilename.txt')) || (await exists('src/fs/files/properFilename.md'))){

            throw new Error("FS operation failed"); 

            } else {
        const promise = await fs.rename('src/fs/files/wrongFilename.txt','src/fs/files/properFilename.md');
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

rename();