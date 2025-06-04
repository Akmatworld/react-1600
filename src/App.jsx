import { Routes, Route } from "react-router";

import './App.scss';

import Nav from './Navigation'
import Home from './pages/Home'
import About from './pages/About'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
