import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'
import Advent from './components/Advent'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <Sections />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advent" element={<Advent />} />
      </Routes>
    </div>
  )
}

export default App
