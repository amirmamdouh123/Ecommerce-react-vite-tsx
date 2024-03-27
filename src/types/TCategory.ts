import { TRespone } from "./sharedTypes"

export type TCateogry ={
    id:number,
    title:string,
    img:string,
    
}

export type cat_prefix = 'men-shirts' | 'men-shoes' | 'women-shoes' | 'womens-watches'


export type TResponseCategories=TRespone<TCateogry>