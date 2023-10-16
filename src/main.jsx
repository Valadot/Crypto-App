import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import { CurrencyColorProvider } from './contexts/CurrencyColorProvider/CurrencyColorProvider'
import {CoinDataProvider} from "./contexts/CoinDataProvider/CoinDataProvider"



ReactDOM.createRoot(document.getElementById('root')).render(
  

  <React.StrictMode>
    
    <CurrencyColorProvider>
    <CoinDataProvider>
    <App />
    </CoinDataProvider>
    </CurrencyColorProvider>
    
  </React.StrictMode>
  
)
