export type TRespone<T>={
    items:T[],
    status:TStatus,
    error:string |null
}

export type TStatus='idle'|'pending'|'succeed'| 'failed'

export type baseElement={
    id:number,
}


export type TLoading= {
    status:TStatus,
    error:string |null,
    children : React.ReactNode
}