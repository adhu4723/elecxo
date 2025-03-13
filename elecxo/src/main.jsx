import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <BrowserRouter basename='/elecxo'>
    <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
