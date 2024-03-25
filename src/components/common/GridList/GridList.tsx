import { Col, Row } from "react-bootstrap";
import { baseElement } from "src/types/sharedTypes";

type GridListType<T extends baseElement>={
    items: T[],
    renderLoop:(item : T)=>React.ReactNode
}

function GridList<ElementType extends baseElement>({items, renderLoop}:GridListType<ElementType>){
    const elementTSX = items.map((el)=>{
        return  renderLoop({...el})  
    });
    

    return (elementTSX)
}

export default GridList;