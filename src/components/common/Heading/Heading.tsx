import React from "react";

type THeading ={
    children:React.ReactNode
}
function Heading({ children } :THeading){
    console.log("TitleHeading run");
    return <h2 className="mb-3" style={{textTransform:"capitalize",color:"GrayText" }}>{children}</h2>
}

export default React.memo(Heading);