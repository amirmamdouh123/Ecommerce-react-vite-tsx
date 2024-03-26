import {Suspense, lazy} from 'react';
import MainLayout from '@layouts/MainLayout/MainLayout.tsx'
import { createBrowserRouter  } from 'react-router-dom';

// import Categories from '@pages/Categories.tsx';
// import AboutUs from '@pages/AboutUs.tsx';
// import Products from '@pages/Products.tsx';
// import Error from '@pages/error/ERROR.tsx'
// import Cart from '@pages/Carts';


const Home = lazy(()=>import('@pages/Home.tsx'))
const Categories = lazy(()=>import('@pages/Categories'))
const AboutUs = lazy(() => import('@pages/AboutUs.tsx'));
const Products = lazy(() => import('@pages/Products.tsx'));
const Error = lazy(() => import('@pages/error/ERROR.tsx'));
const Cart = lazy(() => import('@pages/Carts'));
const WishItems = lazy(() => import('@pages/wishItems'));


const route = createBrowserRouter([
    {path:'/' , element:<MainLayout />,
    errorElement:<Error />
    ,children:[
      { index:true 
        , element:<Suspense fallback="loading please wait..."><Home /></Suspense>},
      { path:'Categories', 
        element:<Suspense fallback="loading please wait..."><Categories/></Suspense>},
      { path:'AboutUs',
        element:<Suspense fallback="loading please wait...">  <AboutUs/>  </Suspense>},
      { path:'Cart',
        element:<Suspense fallback="loading please wait...">  <Cart /> </Suspense>},
      { path:'products/:prefix',
        element:<Suspense fallback="loading please wait..."><Products /></Suspense>,
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
      {path:'/wishlist' , element: <Suspense fallback="loading please wait..."> <WishItems /> </Suspense>}
    ]}
  ])

  export default route;