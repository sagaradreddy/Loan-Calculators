import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProviderCustom } from './context/ThemeProviderCustom';
import { BrowserRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProviderCustom>
     <App />
    </ThemeProviderCustom>
    </BrowserRouter>
  </StrictMode>
)
