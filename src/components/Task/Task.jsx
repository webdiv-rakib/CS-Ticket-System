import React from 'react';

const Task = ({ ticket, handleComplete }) => {

    return (
        <div className='card p-2 bg-base-300 space-y-2 mt-5'>
            <h1 className='text-xl font-semibold'>{ticket.title}</h1>
            <button onClick={() => handleComplete(ticket)} className='btn bg-green-600 text-white'>Completed</button>
        </div >
    );
};

export default Task;