import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import GlobalStyles from './global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
)
