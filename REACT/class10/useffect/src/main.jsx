import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App1 from './Controlled-and-Uncontrolled/App1'
// import './index.css'
// import App from './App.jsx'
// import App from './useEffect/App.jsx'
// import App from './AXIOS/App.jsx'
import App2 from './Controlled-and-Uncontrolled/App2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <App/> */}
    {/* <App/> */}
    {/* <App1/> */}
    <App2/>

  </StrictMode>,
)
