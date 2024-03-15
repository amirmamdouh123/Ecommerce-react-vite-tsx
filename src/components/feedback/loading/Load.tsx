
type TLoading={
    status: 'idle'|'pending' |'failed' |  'succeed',
    error:string| null,
    children: React.ReactNode       //content that we will render If status is fulfilled
}

function Loading({status,error ,children} : TLoading){

    if(status==='idle'){
        //do nothing
    }
    if(status==='failed'){
        throw new Response(null,{
            status:400,
            statusText:error as string,
        })
    }
    if(status ==='pending')
    return <p>loading, please wait..</p>

    return children         //if status == succeed

}

export default Loading;



