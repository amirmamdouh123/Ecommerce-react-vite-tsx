import { TRespone } from "./sharedTypes"

export type TCateogry ={
    id:number,
    title:string,
    img:string,
    
}

export type TResponseCategories=TRespone<TCateogry>