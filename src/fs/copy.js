import * as fs from "node:fs/promises";


export const copy = async () => {
    try {


        if (!(await exists('src/fs/files')) || (await exists('src/fs/files_copy'))) {

            throw new Error("FS operation failed"); 
        } else {

            const promise = await fs.cp('src/fs/files', 'src/fs/files_copy', {recursive: true});
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

copy();