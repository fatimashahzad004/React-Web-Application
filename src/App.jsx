import React from 'react'
// File path wahi rakhein jo aapke file structure ke hisaab se sahi hai
import Home from './Components/Home/Home.jsx' 
import Fruits from './Components/Fruits/Fruits.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dairy from './Components/Dairy/Dairy.jsx';
import Seafood from './Components/Seafood/Seafood.jsx';
import Error404 from './Components/Error404/Error404.jsx';
import AllProducts from './Components/AllProducts/AllProducts.jsx';
import Layout from './Components/Layout/Layout.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Sourcing from './Components/Sourcing/Sourcing.jsx';

export default function App() {

const router = createBrowserRouter([

  {

    path: '/',
    element: <Layout />,
    children:[
{
 path: '/',
    element: <Home />
},
      {
    path: '/fruits',
    element: <Fruits />
  },
    {
    path: '/dairy',
    element: <Dairy />
  },
    {
    path: '/seafood',
    element: <Seafood />
  },
   {
    path: 'allproducts',
    element: <AllProducts />
  }
,
 {
  path: '*',
  element: <Error404/>
},
  {
    path: 'about',
    element: <About />
  },
    {
    path: 'contact',
    element: <Contact />
  },
    {
    path: 'sourcing',
    element: <Sourcing/>
  }
    ]
  }
])

return <RouterProvider router={router} />


 
}