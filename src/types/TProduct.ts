import { TRespone } from "./sharedTypes"

export type TProduct ={
    id:number,
    title:string,
    img:string,
    price:number,
    max:number,
    quantity?:number,
    isLiked?:boolean
}

export type TResponseProducts=TRespone<TProduct>