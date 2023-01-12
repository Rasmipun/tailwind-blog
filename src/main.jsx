import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <Error/>,
    children:[
      {path: '', element: <Home />},
  {path: 'about', element: <Home />},
  {path: 'contact', element: <Home />},
  {path: 'blog', element: <Home />},
  {path: 'login', element: <Login />},
  {path: 'error', element: <Error />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider>
      <App/>
      </ThemeProvider> */}
      
      <RouterProvider router={router} />
      
      
  </React.StrictMode>,
)
