import { MdOutlineMenuOpen } from "react-icons/md";
const NavBar = () => {
    return (
        <div className="navbar shadow-sm md:flex justify-between px-4 md:px-30 bg-base-100">
            <div className="flex-1">
                <a className="text-2xl font-bold cursor-pointer">CS Ticket System</a>
            </div>
            {/* mobile menu design */}
            <div className="flex-none md:hidden">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} className="btn btn-ghost text-2xl">
                        <MdOutlineMenuOpen></MdOutlineMenuOpen>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                        <li><button className="btn btn-sm text-white border-none mt-2" style={{ background: 'linear-gradient(90deg, #422AD5 0%, #6A54F0 100%)' }}>+ New Ticket</button></li>
                    </ul>
                </div>
            </div>
            {/* desktop menu */}
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