import './App.css'
import ButtonSecondary from './components/ButtonSecondary'
import saladLogo from './assets/salad-logo.jpg'

function App() {
  return (
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
      <ButtonSecondary text="let's Explore" link="./components/Home" />
    </div>
  )
}

export default App
