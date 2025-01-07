import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import LoginPage from './main/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {<LoginPage/>}
  </StrictMode>,
)
