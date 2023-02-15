import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//import components
import {UserName, Password, Register, Profile, Recovery, Reset, PageNotFound} from './components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserName></UserName>
  },
  {
    path: '/register',
    element: <Register></Register>
  },
  {
    path: '/password',
    element: <Password></Password>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
]); 

const App=()=> {

  return (
    <main>
      <RouterProvider router={router}> </RouterProvider>
    </main>

  )
}

export default App
