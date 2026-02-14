import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'

function AppWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
