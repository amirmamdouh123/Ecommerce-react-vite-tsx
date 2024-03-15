import { TLoading } from "./shared"

export type IOneProduct={
    id:number,
    title:string,
    img:string,
    price:number
}

export type IProductState={
    records: IOneProduct[]
    loading: TLoading
    error: string|null
}