import MainLayout from '@layouts/MainLayout/MainLayout.tsx'
import { createBrowserRouter  } from 'react-router-dom';
import Home from '@pages/Home.tsx';
import Categories from '@pages/Categories.tsx';
import AboutUs from '@pages/AboutUs.tsx';
import Products from '@pages/Products.tsx';
import Error from '@pages/error/ERROR.tsx'


const route = createBrowserRouter([
    {path:'/' , element:<MainLayout />,
    errorElement:<Error />
    ,children:[
      { index:true 
        , element:<Home />},
      { path:'Categories', 
        element:<Categories/>},
      { path:'AboutUs',
        element:<AboutUs/>},
      { path:'products/:prefix',
        element:<Products />,
        loader:({params})=>{  
          if(!/^[a-z | -]+$/.test(params.prefix as string)){//error params.prefix may be string or undefined          
          const ResponseBody = {errorType:'Bad Request',prefix: params.prefix}  //hbda mn 3ndi
          const headers= new Headers({
                 'Content-Type': 'application/json',
                 'Custom-Header': 'Custom-Value'
                          })
            throw new Response(JSON.stringify(ResponseBody),{   //error
              status:400,
              statusText:"Category is not found",
              headers:headers
            })
        }
          return true
         }

        //  loader:( { params } )=>{
        //   if(typeof params.prefix !=='string' || 
        //   !/^[a-z]+$/.test(params.prefix)){
        //     const headers =new Headers({
        //         'Content-Type': 'application/json',
        //         'Custom-Header': 'Custom-Value'
        //     })
        //     const ResponseBody = { type :'Bad Requset',
        //                             prefix:params.prefix }

        //     throw new Response(JSON.stringify(ResponseBody),{
        //         status:400,
        //         statusText:'Category is not Found'
        //         ,headers:headers
        //     }) 
        //   }
        //      return true;
        //  }
      }
    ]}
  ])

  export default route;