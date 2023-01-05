import { useState, useEffect } from 'react'
import Navbar from './components/navbar'
import LoginForm from './components/login-form'
import PriceList from './components/price-list'
import AboutUsButton from './components/about-us'
import Rechtliches from './components/rechtliches'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [page, setPage] = useState('')

  const Content = ({page}) => {
    switch(page) {
      case 'about-us':
        return <AboutUsButton />
      case 'rechtliches':
        return <Rechtliches />
      default:
        return <></> 
    }
  }

  useEffect(() => {
    console.log('useEffect')
  }, [isLoggedIn])


  
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} changePageHandler={setPage}/> 
      <h1 id="title">Capybara's Rentel Service</h1> 
      
      <section>
        <LoginForm />
        <PriceList />
      </section>
      
      <section> 
        <AboutUsButton />
        <Rechtliches />
      </section>
      <section>
        {Content({page})}
      </section>
    </div>
  )
}

export default App
