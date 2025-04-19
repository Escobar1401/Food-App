import './App.css'
import ButtonSecondary from './components/ButtonSecondary'
import saladLogo from './assets/salad-logo.jpg'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="container">
          <div className="logo">
            <img src={saladLogo} alt="logo" />
          </div>
          <div className="title">
            <span>Fast Delivery at your doorstep</span>
          </div>
          <div className="subtitle">
            <span>Home delivery and online reservations system for restaurants & cafe</span>
          </div>
          <ButtonSecondary text="let's Explore" link="/home" />
        </div>
      } />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
