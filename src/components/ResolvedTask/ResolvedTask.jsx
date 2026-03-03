import React from 'react';

const ResolvedTask = ({ ticket }) => {
    return (
        <div className='card p-2 bg-base-300 space-y-2 mt-5'>
            <h1 className='text-xl font-semibold'>{ticket.title}</h1>
        </div >
    );
};

export default ResolvedTask;