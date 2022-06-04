import * as fs from "node:fs/promises";

export const remove = async () => {

    try{
        if(!(await exists('files/fileToRemove.txt')))
           {
            throw new Error("FS operation failed");
        }
        else{
            const promise = await fs.rm('files/fileToRemove.txt');
        }        
    }
    
    catch(error){
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

remove();