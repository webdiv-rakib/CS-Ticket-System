import React from 'react';

const Task = ({ ticket, handleComplete }) => {
    
    return (
        <div className='card'>
            <h1></h1>
            <button onClick={() => handleComplete(ticket)}>Completed</button>
        </div >
    );
};

export default Task;