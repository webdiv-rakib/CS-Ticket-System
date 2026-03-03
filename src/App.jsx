import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <CustomerTickets></CustomerTickets>
      <Footer></Footer>
    </>
  )
}

export default App
