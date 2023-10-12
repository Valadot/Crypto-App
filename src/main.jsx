import React from 'react'
import ReactDOM from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Portfolio from "./components/Portfolio/Portfolio.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <App/>
  },
  {
    path: "/portfolio",
    element:
      <Portfolio />

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
