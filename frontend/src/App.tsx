import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/layout'
import Estoque from './components/Estoque'



function App() {


  return (
    <Routes >
       <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/estoque" element={<Estoque />} />
       </Route>
    </Routes>
  )
}

export default App
