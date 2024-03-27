import { cat_prefix } from "./TCategory";

export const isString=(obj:unknown ): obj is string =>{
    if(typeof obj === 'string')
        return true  ; 
    return false
}

export const isCategory=(prefix:string):prefix is cat_prefix =>{
    if(['men-shirts', 'men-shoes', 'women-shoes', 'womens-watches'].includes(prefix))
        return true;
    else
        return false;
}
