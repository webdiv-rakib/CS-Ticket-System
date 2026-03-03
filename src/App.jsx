import './App.css'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // useState for handle ticket data
  const [tickets, setTickets] = useState([]);

  // useState for progress
  const [inProgress, setInProgress] = useState([]);

  // useState for resolve
  const [resolve, setResolve] = useState([]);

  // data fetched here
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setTickets(data))
  }, [])

  // handle click on card
  const handleAddToInProgress = (ticket) => {
    const isExist = inProgress.find(item => item.id === ticket.id);

    if (!isExist) {
      const updatedTicket = { ...ticket, status: "In Progress" };
      setInProgress([...inProgress, updatedTicket]);
      const updatedTickets = tickets.map(t =>
        t.id === ticket.id ? { ...t, status: "In Progress" } : t
      );
      setTickets(updatedTickets);
      toast.info(`"${ticket.title}" is now In Progress!`);
    } else {
      toast.warn("This ticket is already being handled.");
    }
  };

  // handle click on complete
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

      {/* <CustomerTickets
        tickets={tickets}
        handleAddToInProgress={handleAddToInProgress}
        inProgress={inProgress}
        resolve={resolve}
        handleComplete={handleComplete}></CustomerTickets> */}

      <Footer></Footer>
    </>
  )
}

export default App
