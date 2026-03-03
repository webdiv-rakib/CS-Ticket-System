import CustomerTicket from '../CustomerTicket/CustomerTicket';
import ResolvedTask from '../ResolvedTask/ResolvedTask';
import Task from '../Task/Task';

const CustomerTickets = ({ tickets, handleAddToInProgress, handleComplete, inProgress, resolve }) => {
    return (
        <div className='md:flex md:justify-between md:gap-10 md:px-30 md:mt-10 mt-5'>
            <div className='md:w-3/4 p-2'>
                <h1 className='text-3xl font-semibold text-center md:text-left'>Customer Tickets</h1>
                <div className='md:grid md:grid-cols-2 md:gap-8 md:mt-5 flex flex-col gap-2 mt-3'>
                    {
                        tickets.map(ticket => <CustomerTicket key={ticket.id} ticket={ticket} handleAddToInProgress={handleAddToInProgress}></CustomerTicket>)
                    }
                </div>
            </div>
            <div className='md:w-1/4 md:space-y-5 px-5 mt-5 space-y-10'>
                <div>
                    <h1 className='text-2xl font-semibold'>Task Status</h1>
                    <p className='text-gray-400'>Select a ticket to add to Task Status</p>
                    {inProgress.map((ticket, index) => (
                        <Task
                            key={index}
                            ticket={ticket}
                            handleComplete={handleComplete}
                        />
                    ))}
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Resolved Task</h1>
                    <p className='text-gray-400'>No resolved Tasks yet</p>
                    <div>
                        {
                            resolve.map(ticket => <ResolvedTask key={resolve.id} ticket={ticket}></ResolvedTask>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;