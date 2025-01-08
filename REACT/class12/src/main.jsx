import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactRevision from './main/ReactRevision'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRevision/>
  </StrictMode>,
)
