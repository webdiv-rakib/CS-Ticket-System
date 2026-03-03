import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect } from 'react'

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolve, setResolve] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  const handleAddToInProgress = ticket => {
    alert('card clicked');
  }

  const handleComplete = ticket => {
    alert('button clicked')
  }
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <CustomerTickets
        tickets={tickets}
        handleAddToInProgress={handleAddToInProgress}
        handleComplete={handleComplete}></CustomerTickets>
      <Footer></Footer>
    </>
  )
}

export default App
