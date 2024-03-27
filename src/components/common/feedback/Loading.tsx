import CategorySkeleton from './skeletons/CategorySkeleton'
import ProductSkeleton from './skeletons/ProductSkeleton';
import CartSkeleton from './skeletons/CartSkeleton';
import { TLoading } from 'src/types/sharedTypes';
import { LottieHandlerr } from '../index';
import emptyLottie from '@assets/lottie/empty.json'

const Loading = ({status,error ,children , type } : TLoading)=>{
    
    const typeSkeleton = {
        'cart':<CartSkeleton />,
        'product':<ProductSkeleton />,
        'category': < CategorySkeleton />,
    }
    
    const headers= new Headers({
        'Content-Type': 'application/json',
        'Custom-Header': 'Custom-Value'
    })
    switch(status){
        case 'pending': {
            return typeSkeleton[type];
        }
        case 'failed' : throw new Response(
            'Bad Request',{
                status:400 ,
                statusText: error as string ,
                headers:headers});
        case 'succeed' : return children;
        case 'idle' : return LottieHandlerr({lottieType:'empty' ,message:'No items are selected'})
    }
}

export default Loading;