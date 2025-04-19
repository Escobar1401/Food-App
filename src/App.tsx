import './App.css'
import ButtonSecondary from './components/ButtonSecondary'

function App() {

  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="src/assets/salad-logo.png" alt="logo" />
        </div>
        <div className="title">
          <span>Fast Delivery at your doorstep</span>
        </div>
        <div className="subtitle">
          <span>Home delivery and online reservations system for restaurants & cafe</span>
        </div>
        <ButtonSecondary text="let´s Explore"  />
      </div>
    </>
  )
}

export default App
