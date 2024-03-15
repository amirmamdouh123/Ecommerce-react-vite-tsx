import ErrorSVG from '@assets/svg/error.svg?react'
import './errorStyle.css'
import { Container } from 'react-bootstrap'
import { Link, useRouteError } from 'react-router-dom';/* isRouteErrorResponse ,*/ 

type TErrorResponse={
    status:string ,
    statusText:string,
    headers:Headers
} | undefined

function ERROR(){

    const errorResponse = useRouteError() as TErrorResponse ; //gets the error response 
                                           //it may the response of the guarding or mismatching url.
    let errorStatus;                       //both of the two types of errors considered as RouteErrorResponse
    let errorText;
    // if(isRouteErrorResponse(errorResponse)){
    //   errorStatus= errorResponse.status
    //   errorText= errorResponse.statusText
    // }
    //the following expression is better
    if(errorResponse !== undefined){
        errorStatus= errorResponse.status
        errorText= errorResponse.statusText
    }

    return(
        <Container className='errorContainer' >
        <ErrorSVG />
        <p className="errorType">Error {errorStatus}</p>
        <p className='errorText'>{errorText}</p>
        <Link to='/' replace={true}>
        What about returning back to safety page</Link>
        </Container>
    )
}

export default ERROR;