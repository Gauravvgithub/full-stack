import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPage from './main/LoginPage.jsx'
import Login from './main/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {<LoginPage/>}
    {/* <Login/> */}
  </StrictMode>,
)
