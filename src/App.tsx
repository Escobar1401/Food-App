import './App.css'
import ButtonSecondary from './components/ButtonSecondary'
import saladLogo from './assets/salad-logo.jpg'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="containerApp">
          <div className="logo">
            <img src={saladLogo} alt="logo" />
          </div>
          <div className="text">
            <span style={{ fontSize: '24px', fontWeight: '600' }}>Fast Delivery at your doorstep</span>
            <br />
            <span style={{ fontSize: '16px', fontWeight: '400' }}>Home delivery and online reservations system for restaurants & cafe</span>
          </div>
          <ButtonSecondary text="let's Explore" link="/home" />
        </div>
      } />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
