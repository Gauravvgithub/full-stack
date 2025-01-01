import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import Testing from './css-implementation/Testing.jsx'
import App from './react-router-dom/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Testing/> */}
    <App/>
  </StrictMode>,
)
