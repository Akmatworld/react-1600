import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css'

import App from './App.jsx'
import About from './About'
import Nav from './Navigation'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
