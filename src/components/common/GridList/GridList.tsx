import React from "react"
import { Col, Row } from "react-bootstrap"
import { baseElement } from "src/types/shared"

type GridProps<T extends baseElement>={
    records: T[],
    renderElement:(record:T)=>React.JSX.Element
}

function GridList<T extends baseElement>({records , renderElement} : GridProps<T>  ){
    const TSX = records.map((element)=>{
        return (<Col xs={3} key={element.id} className="d-flex justify-content-center mb-5 mt-2 " >
                    {renderElement(element)}
                </Col>)
    })

    return (<Row>
        {TSX}
        </Row>)
}

export default GridList
