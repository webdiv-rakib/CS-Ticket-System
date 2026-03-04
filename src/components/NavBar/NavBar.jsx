import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar shadow-sm md:flex justify-between px-4 md:px-30">
            <div>
                <a className="text-2xl font-bold cursor-pointer">CS Ticket System</a>
            </div>
            <div className="hidden md:flex md:items-center md:gap-5">
                <a href="" className="hover:text-gray-600">Home</a>
                <a href="" className="hover:text-gray-600">FAQ</a>
                <a href="" className="hover:text-gray-600">Changelog</a>
                <a href="" className="hover:text-gray-600">Blog</a>
                <a href="" className="hover:text-gray-600">Download</a>
                <a href="" className="hover:text-gray-600">Contact</a>
                <button className="btn border-none text-white px-6 hover:opacity-90" style={{ background: 'linear-gradient(90deg, #422AD5 0%, #6A54F0 100%)' }}>+ New Ticket</button>
            </div>
        </div>
    );
};

export default NavBar;