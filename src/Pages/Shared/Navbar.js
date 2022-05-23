import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/home' className='text-slate-600 text-xl font-bold font-josefin'>Home</Link></li>
        <li><Link to='/blog' className='text-slate-600 text-xl font-bold font-josefin'>Blog</Link></li>
        <li><Link to='/myportfolio' className='text-slate-600 text-xl font-bold font-josefin'>My Portfolio</Link></li>
        <li><Link to='/purchase' className='text-slate-600 text-xl font-bold font-josefin'>Purchase</Link></li>
        <li><Link to='/dashboard' className='text-slate-600 text-xl font-bold font-josefin'>Dashboard</Link></li>
        <li><Link to='/login' className='text-slate-600 text-xl font-bold font-josefin'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 lg:flex lg:justify-around">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-4xl font-finger text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Picasso Painting</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;