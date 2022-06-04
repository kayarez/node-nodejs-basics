import * as fs from "node:fs/promises";
import { constants } from 'fs';

export const create = async () => {

    try{
        if(await exists('files/fresh.txt'))
           {
            throw new Error("FS operation failed");
        }
        else{
        const promise = await fs.writeFile('files/fresh.txt', "I am fresh and young", {flag: 'wx'});
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

create();