import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
 
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login'
import App from './App';
import Register from './Pages/Register/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/email",
        element: <Login></Login>  ,
      },
      {
        path: "/google",
        element: <App></App> ,
      },
      {
        path: "/Register",
        element:<Register></Register> ,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
