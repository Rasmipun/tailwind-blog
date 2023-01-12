import React, { useContext } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./Theme";

const Nav = () => {
    const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    
    <div className='sticky  z-10 justify-between flex flex-wrap top-0 left-0 bg-[#7273a01f] text-white py-6 drop-shadow-2xl pr-16'>
        <Link to="/">
        <div className="inline-flex text-xl cursor-pointer font-semibold pl-14">
            Rasmi's Blog
        </div>
        </Link>
        <div className="flex">
        <nav>
            <ul className="md:flex hidden items-center justify-center space-x-8 ">
                <div>
                <button onClick={() => toogleTheme()}>{theme}</button>
                    <p>Theme</p>
                    {/* <div className="pl-1">
                    <svg width="21" height="21" viewBox="0 0 256 256"><path fill="#888888" d="M128 64a64 64 0 1 0 64 64a64.1 64.1 0 0 0-64-64Zm0 120a56 56 0 1 1 56-56a56 56 0 0 1-56 56Zm-4-148V16a4 4 0 0 1 8 0v20a4 4 0 0 1-8 0ZM46 51.6a4 4 0 1 1 5.6-5.6l14.2 14.1a4.2 4.2 0 0 1 0 5.7a3.9 3.9 0 0 1-2.9 1.1a3.8 3.8 0 0 1-2.8-1.1ZM40 128a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h20a4 4 0 0 1 4 4Zm25.8 62.2a4.2 4.2 0 0 1 0 5.7L51.6 210a3.8 3.8 0 0 1-2.8 1.2A3.9 3.9 0 0 1 46 210a3.9 3.9 0 0 1 0-5.6l14.1-14.2a4.2 4.2 0 0 1 5.7 0ZM132 220v20a4 4 0 0 1-8 0v-20a4 4 0 0 1 8 0Zm78-15.6a3.9 3.9 0 0 1 0 5.6a3.9 3.9 0 0 1-2.8 1.2a3.8 3.8 0 0 1-2.8-1.2l-14.2-14.1a4 4 0 0 1 5.7-5.7Zm34-76.4a4 4 0 0 1-4 4h-20a4 4 0 0 1 0-8h20a4 4 0 0 1 4 4Zm-34-82a3.9 3.9 0 0 1 0 5.6l-14.1 14.2a3.8 3.8 0 0 1-2.8 1.1a3.9 3.9 0 0 1-2.9-1.1a4.2 4.2 0 0 1 0-5.7L204.4 46a3.9 3.9 0 0 1 5.6 0Z"/></svg>
                    </div> */}
                    
                    </div>
                <li>
                    <NavLink to="/"   className= "font-semibold border-solid border-2-transparent hover:bg-indigo-300 p-7 hover:text-fuchsia-600 dark:hover:text-sky-400 hover:duration-700">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"   className= "font-semibold border-solid border-2-transparent hover:bg-indigo-300 p-7 hover:text-fuchsia-600 dark:hover:text-sky-400 hover:duration-700">About</NavLink>
                </li>
                <li>
                    <NavLink to="/blog"  className= " font-semibold border-solid border-2-transparent hover:bg-indigo-300 py-7 px-9 hover:text-fuchsia-600 dark:hover:text-sky-400 hover:duration-700">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/contact"  className= " font-semibold border-solid border-2-transparent hover:bg-indigo-300 py-7 px-5 hover:text-yellow-200 dark:hover:text-sky-400 hover:duration-700">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/login"  className= " font-semibold border-solid border-2-transparent hover:bg-indigo-300 py-7 px-5 hover:text-yellow-200 dark:hover:text-sky-400 hover:duration-700">Login</NavLink>
                </li>
                
            </ul>
            <div className='md:hidden flex justify-center items-center'>
            <GiHamburgerMenu className='h-[20px] w-[20px] cursor-pointer' />
        </div>
        </nav>
        </div>
        </div>
    
    )
};

export default Nav;