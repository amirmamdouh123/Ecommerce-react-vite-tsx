import {isAxiosError} from "axios";

function isAxiosErrorHandler(error:unknown){
    if(isAxiosError(error)){
        return error.response?.data.message || error.message
    }
    else 
        return "unexpected error"
}
export default isAxiosErrorHandler;