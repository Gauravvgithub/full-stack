import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Context from './main/Context'
import App from './counter-with-context/App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Context/> */}
    <App/>
  </StrictMode>,
)
