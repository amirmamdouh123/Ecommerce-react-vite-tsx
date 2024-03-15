import { TLoading ,baseElement} from "./shared"

export type IOneCategory={
    id:number,
    title:string,
    prefix:string,
    img:string 
}

export type IcategoriesState={
    records:IOneCategory[],
    loading: TLoading,
    error:string | null
}