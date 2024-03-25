import MainLayout from '@layouts/MainLayout/MainLayout.tsx'
import { createBrowserRouter  } from 'react-router-dom';
import Home from '@pages/Home.tsx';
import Categories from '@pages/Categories';
import AboutUs from '@pages/AboutUs.tsx';
import Products from '@pages/Products.tsx';
import Error from '@pages/error/ERROR.tsx'
import Cart from '@pages/Carts';
import WishItems from '@pages/wishItems'

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
      { path:'Cart',
        element:<Cart />},
      { path:'products/:prefix',
        element:<Products />,
        loader:({params})=>{           //guarding
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
      },
      {path:'/wishlist' , element:<WishItems />}
    ]}
  ])

  export default route;