import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import LandingPage from './pages/LandingPage'
import Auth from './pages/Auth'
import DashBoard from './pages/DashBoard'
import LinkPage from './pages/LinkPage'
import RedirectLinkPage from './pages/RedirectLinkPage'
import UrlProvider from './context'

const router = createBrowserRouter([
  {
    element : <AppLayout/>,
    children : [
      {
        path: '/',
        element : <LandingPage/>
      },
      {
        path: '/dashboard',
        element : <DashBoard/>
      },
      {
        path: '/auth',
        element : <Auth/>
      },
      {
        path: '/link/:id',
        element : <LinkPage/>
      },
      {
        path: '/:id',
        element : <RedirectLinkPage/>
      },
    ]
  }
]);


function App() {
  <UrlProvider>
    return <RouterProvider router={router} />
   </UrlProvider>

}

export default App
