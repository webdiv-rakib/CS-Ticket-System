import { SlCalender } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
const CustomerTicket = ({ ticket, handleAddToInProgress }) => {
    const { id, title, description, customer, priority, status, createdAt } = ticket;
    const statusBg = status === "In Progress" ? "bg-yellow-400 text-black" : "bg-green-500 text-black";
    const priorityColors = {
        Critical: 'text-red-700 font-black uppercase tracking-tight',
        High: 'text-red-500 font-bold',
        Medium: 'text-orange-500 font-semibold',
        Low: 'text-blue-500 font-medium'
    };
    return (
        <div className="card bg-base-300 shadow-xl" onClick={() => handleAddToInProgress(ticket)}>
            <div className="card-body space-y-2">
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                    </div>
                    <div className={`p-2 rounded-2xl font-bold text-xs uppercase shadow-sm ${statusBg} flex items-center gap-1`}>
                        <div>
                            <GoDotFill></GoDotFill>
                        </div>
                        <div>
                            <p>{status}</p>
                        </div>
                    </div>
                </div>
                <p className='text-xl text-gray-600'>{description}</p>
                <div className='flex justify-between font-semibold text-gray-600'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <p>#{id}</p>
                        </div>
                        <div>
                            <p className={priorityColors[priority] || 'text-gray-500'}>
                                {priority}
                            </p>
                        </div>
                    </div>


                    <div className='flex items-center gap-2'>
                        <div>
                            <p>{customer}</p>
                        </div>
                        <div><SlCalender></SlCalender></div>
                        <div><p>{createdAt}</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;