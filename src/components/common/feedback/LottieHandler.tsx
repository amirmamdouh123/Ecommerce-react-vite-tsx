import notFoundd from "@assets/lottie/NotFoundLottie.json"
import loadingg from '@assets/lottie/LoadingLottie.json'
import empty from '@assets/lottie/empty.json'
import Lottiee from 'lottie-react';
// Import Lottie animations and store them in an object
const AllLotties = {
    notFound: notFoundd,
    loading:loadingg,
    empty
}

// Define a type representing keys of the AllLottie object
type lottieItems = keyof typeof AllLotties;

type TLottie ={ 
    lottieType: lottieItems ,
    message?:string 
}

// Define the LottieHandler component
export function LottieHandlerr({ lottieType , message }: TLottie) {
    return (<div style={{display:'flex' ,flexDirection:'column'  , alignItems:'center'}}>
        <Lottiee style={{width:'350px'}} animationData={AllLotties[lottieType]} />
        {message && <p style={{fontWeight:'bold' , marginTop:'5px'}}>{message}</p>
       }
        </div>
    );
}
