import { useState } from 'react'
import LoginForm from './components/login-form'
import PriceList from './components/price-list'
import AboutUs from './components/about-us'
import Rechtliches from './components/rechtliches'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Capybaras Toaster Rental</h1> 
      <LoginForm />
      <PriceList />
      <section> 
        <AboutUs />
        <Rechtliches />
      </section>
    </div>
  )
}

export default App
