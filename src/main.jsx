import React from 'react'
import {useContext} from "react"
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "styled-components"
import { CurrencyColorProvider,CurrencyColorContext } from './contexts/CurrencyColorProvider/CurrencyColorProvider';
import "./index.css"


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
    <CurrencyColorProvider>
    <RouterProvider router={router} />
    </CurrencyColorProvider>
  </React.StrictMode>
  
)
