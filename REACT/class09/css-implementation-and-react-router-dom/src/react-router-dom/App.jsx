import React from 'react'
import A from './A'
import B from './B'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<h1>Hi Weclome To React Router Dom</h1>}></Route>
        <Route path='/a' element={<A></A>} ></Route>
        <Route path='/b' element={<B></B>} ></Route>
    </Routes>
    </BrowserRouter>
)
}
