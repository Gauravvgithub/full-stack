import React from 'react'
import A from './A'
import B from './B'
import ParametersHook from './ParametersHook'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function App() {
  const isLogin = true;
  return (
    
    <BrowserRouter>
    <h1>i am a header</h1>
    <ul>
      <li><Link to="/a">link me to go on a</Link></li>
      <li><Link to="/b">link me to go on b  </Link></li>
      <li><Link to="/">link me to go home page</Link></li>
    </ul>
    <Routes>
      {isLogin && <>
        <Route path="/" element={<h1>Hi Weclome To React Router Dom</h1>}></Route>
        <Route path="/a" element={<A/>} ></Route>
        <Route path="/b" element={<B/>} ></Route>
        <Route path="/b/c" element={<><B/>b ke andar c ha // its a nested path</>} ></Route>
        <Route path="/b/:id" element={<ParametersHook/>} ></Route>
        <Route path="*" element={<h1>not found</h1>}></Route>
        </>}
      {!isLogin &&<>
        <Route path="/" element={<h1>Login Page</h1>} ></Route>
        <Route path="*" element={<h1>not found</h1>}></Route>
      </>}
    </Routes>
    <h1>i am a footer</h1>
    </BrowserRouter>
)
}
