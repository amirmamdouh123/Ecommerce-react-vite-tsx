export const isString=(obj:unknown ): obj is string =>{
    if(typeof obj === 'string')
        return true
    return false
}
