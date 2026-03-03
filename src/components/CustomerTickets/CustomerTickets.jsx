import React, { useEffect, useState } from 'react';
import CustomerTicket from '../CustomerTicket/CustomerTicket';


const CustomerTickets = () => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='flex justify-between gap-10 px-30 mt-10'>
            <div className='md:w-3/4'>
                <h1 className='text-3xl font-semibold'>Customer Tickets: {datas.length}</h1>
                <div className='grid grid-cols-2 gap-8 mt-5'>
                    {
                        datas.map(data => <CustomerTicket key={data.id} data={data}></CustomerTicket>)
                    }
                </div>
            </div>
            <div className='md:w-1/4 space-y-5'>
                <div>
                    <h1 className='text-2xl font-semibold'>Task Status</h1>
                    <p className='text-gray-400'>Select a ticket to add to Task Status</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Resolved Task</h1>
                    <p className='text-gray-400'>No resolved Tasks yet</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;