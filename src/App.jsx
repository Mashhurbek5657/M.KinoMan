import './App.css'
import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import Movies from './Movies/Movies'
import Support from './Support/Support'
import Home2 from './Home2/Home2'
import Subscriptions from './Obuna/Obuna'
import Navbar from './Conponit/Navbar'
import Faqs from './Support/_components/Faqs'
import Abaut from './Support/_components/AboutContact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nons from './Home2/_components2/Nons'
import Sons from './Home2/_components2/Sons'


export default function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/",
          element: <Home2 />,
          children: [
            {
              index: true,
              element: <Nons/>
            },
            {
              path: "nons",
              element: <Nons/>
            },
            {
              path: "sons",
              element: <Sons/>
            }
          ]
        },
        {
          path: "/video",
          element: <Movies />,
        },
        {
          path: "/support",
          element: <Support />,
          children: [
            {
              index: true,
              element: <Faqs />
            },
            {
              path: "faqs",
              element: <Faqs/>
            },
            {
              path: "about-contact",
              element: <Abaut/>
            }
          ]
        },
        {
          path: "/Subscriptions",
          element: <Subscriptions />,
        },
      ],
    },
  ]);

  return (
    <div>
      {/* <Navbar/> */}
      <RouterProvider router={routers}/>
      {/* <Routes>
        <Route path='/' element={<Home2 />} />
        <Route path='/video' element={<Movies />} />
        <Route path='/support' element={<Support />} />
        <Route path='/Subscriptions' element={<Subscriptions/>} />
      </Routes> */}
    </div>
  )
}

