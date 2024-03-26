
interface Cat {
    name: string,
    catVoice:string 
}
interface Dog{
    name:string,
    dogVoice:string 
}


function isCat(animal:unknown): animal is Cat{
    return (animal as Cat).catVoice !==undefined
}

function getVoice(animal:Cat|Dog){  //animal.shared attributes only
    if(isCat(animal)){
        return animal.catVoice
    }
    return animal.dogVoice
}