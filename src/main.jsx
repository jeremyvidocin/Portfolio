/**
 * @copyright 2024 Jeremyvidocin
 * @license Apache-2.0
 */


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import 'lenis/dist/lenis.css' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
