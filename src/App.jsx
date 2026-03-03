import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolve, setResolve] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  const handleAddToInProgress = (ticket) => {
    const isExist = inProgress.find(item => item.id === ticket.id);

    if (!isExist) {
      const newInProgress = [...inProgress, ticket];
      setInProgress(newInProgress);
      toast.info(`"${ticket.title}" added to Task Status!`);
    }
    else {
      toast.error("This ticket is already in progress.");
    }
  }

  const handleComplete = (ticket) => {
    const remainingInProgress = inProgress.filter(item => item.id !== ticket.id);
    setInProgress(remainingInProgress);
    setResolve([...resolve, ticket]);

    const remainingTickets = tickets.filter(item => item.id !== ticket.id);
    setTickets(remainingTickets);
    toast.success(`Ticket #${ticket.id} Resolved Successfully!`);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <NavBar></NavBar>

      <Hero
        inProgressCount={inProgress.length} resolveCount={resolve.length}></Hero>

      <CustomerTickets
        tickets={tickets}
        handleAddToInProgress={handleAddToInProgress}
        inProgress={inProgress}
        resolve={resolve}
        handleComplete={handleComplete}></CustomerTickets>

      <Footer></Footer>
    </>
  )
}

export default App
