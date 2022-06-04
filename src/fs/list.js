import * as fs from "node:fs/promises";

export const list = async () => {
    try {

        if(!(await exists('files'))){

            throw new Error("FS operation failed");
        }

        else{

            const promise = await fs.readdir('files');
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

list();