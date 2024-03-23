import { TProduct } from "./TProduct";
import { TRespone } from "./sharedTypes";

export type TCart = TProduct
export type TResponseCarts = 
{
    items:{[id:number]:number},
    productFullInfo: {[id:number]:TProduct}
    status:'idle'|'succeed'
}