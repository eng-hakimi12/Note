import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Header from './Component/Header2'
import App from './Pages/App'
import { BrowserRouter } from 'react-router-dom'
import { Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Header />
  <App /> 
  </BrowserRouter>
  
)
