
type THeading ={
    children:React.ReactNode
}
function Heading({children} :THeading){
    return <h2 className="mb-3" style={{textTransform:"capitalize",color:"GrayText" }}>{children}</h2>
}

export default Heading;