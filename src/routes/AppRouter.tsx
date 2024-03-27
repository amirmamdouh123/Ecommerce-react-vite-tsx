import {Suspense, lazy} from 'react';
import MainLayout from '@layouts/MainLayout/MainLayout.tsx'
import { createBrowserRouter  } from 'react-router-dom';

import Error from '@pages/error/ERROR.tsx'
import { isCategory } from 'src/types/index';
import { LottieHandlerr } from '@components/common';

const Home = lazy(()=>import('@pages/Home.tsx'))
const Categories = lazy(()=>import('@pages/Categories'))
const AboutUs = lazy(() => import('@pages/AboutUs.tsx'));
const Products = lazy(() => import('@pages/Products.tsx'));
const Cart = lazy(() => import('@pages/Carts'));
const WishItems = lazy(() => import('@pages/wishItems'));

const fallback =LottieHandlerr({lottieType:'loading'})


const route = createBrowserRouter([
    {path:'/' , element:<MainLayout />,
    errorElement:<Error />
    ,children:[
      { index:true 
        , element:<Suspense fallback={fallback}><Home /></Suspense>},
      { path:'categories', 
        element:<Suspense fallback={fallback}><Categories/></Suspense>},
      { path:'AboutUs',
        element:<Suspense fallback={fallback}>  <AboutUs/>  </Suspense>},
      { path:'Cart',
        element:<Suspense fallback={fallback}>  <Cart /> </Suspense>},
      
      {path:'/wishlist' , element: <Suspense fallback={fallback}> <WishItems /> </Suspense>},

      { path:'products/:prefix',
        element:<Suspense fallback={fallback}><Products /></Suspense>,
        loader:(({params})=>{
          if(!isCategory(params.prefix as string)){
            throw new Response('Bad Request',{status:404,statusText:'Category is not found'})
          }
          return true
        })
      
      }
    ]}
  ])

  export default route;