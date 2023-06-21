import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EstoqueProvider from './context/EstoqueProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <BrowserRouter>
      <EstoqueProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </EstoqueProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
