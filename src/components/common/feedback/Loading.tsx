import { TLoading } from "src/types/sharedTypes";



const Loading =({status,error ,children} : TLoading)=>{
    const headers= new Headers({
        'Content-Type': 'application/json',
        'Custom-Header': 'Custom-Value'
    })
    switch(status){
        case 'pending': return 'loading, Please Wait...';
        case 'failed' : throw new Response(
            'Bad Request',{
                status:400 ,
                statusText:error as string ,
                headers:headers});
        case 'succeed' : return children;
        case 'idle' : return 'no items present yet';
    }
}

export default Loading;