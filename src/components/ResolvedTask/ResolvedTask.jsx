const ResolvedTask = ({ ticket }) => {
    return (
        <div className='card p-2 bg-[#e0e7ff] space-y-2 mt-5'>
            <h1 className='text-xl font-semibold md:py-5 md:px-5 p-3'>{ticket.title}</h1>
        </div >
    );
};

export default ResolvedTask;