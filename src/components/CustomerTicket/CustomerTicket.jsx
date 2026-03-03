import React from 'react';
import { SlCalender } from "react-icons/sl";
const CustomerTicket = ({ data }) => {
    const { id, title, description, customer, priority, status, createdAt } = data
    return (
        <div className="card bg-base-300 shadow-xl">
            <div className="card-body space-y-5">
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>{title}</h1>
                    </div>
                    <div className='p-2 rounded-2xl font-bold bg-green-500'>
                        <p className='text-gray-600'>{status}</p>
                    </div>
                </div>
                <p className='text-xl text-gray-600'>{description}</p>
                <div className='flex justify-between font-semibold text-gray-600'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <p>#{id}</p>
                        </div>
                        <div>
                            <p>{priority}</p>
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