import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Context from './main/Context'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Context/>
  </StrictMode>,
)
