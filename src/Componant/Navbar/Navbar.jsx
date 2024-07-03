import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navItem = <>
        <li className="text-white"><NavLink to='/'>Home</NavLink></li>
        <li className="text-white"><NavLink to='/about'>About</NavLink></li>
        <li className="text-white"><NavLink to='/project'>Projects</NavLink></li>
        <li className="text-white"><NavLink to='/blog'>Blog</NavLink></li>
        <li className="text-white"><NavLink to='/contact'>Contact</NavLink></li>
    </>
    return (
        <div className="">
            {/* bg-black bg-opacity-40 */}
            <div className="fixed navbar bg-neutral px-5 md:px-[80px] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden mr-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="text-4xl text-white font-extrabold Playball cursor-pointer">M</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;