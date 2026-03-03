import React from 'react';

const CustomerTicket = ({ data }) => {
    const { id, title, description, customer, priority, status, createdAt } = data
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                <div>
                    <h1>{title}</h1>
                    <p>{status}</p>
                </div>
                <p>{description}</p>
                <div>
                    <p>{id}</p>
                    <p>{priority}</p>
                    <p>{customer}</p>
                    <p>{createdAt}</p>
                </div>
            </div>
        </div>
    );
};

export default CustomerTicket;