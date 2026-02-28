import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './pages/hero.jsx'
import AboutUs from './pages/about.jsx'
import Feedback from './pages/feedback.jsx'
import Products from './pages/products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <Hero />
      <AboutUs />
      <Feedback />
      <Products />
    </App>
  </StrictMode>,
)
