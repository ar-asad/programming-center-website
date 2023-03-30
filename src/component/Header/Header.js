import React from 'react';
import img from '../../images/player-1.png'

const Header = () => {
    return (
        <div className='flex justify-between p-4 drop-shadow-md bg-slate-50'>
            <h1 className='text-3xl font-semibold'>Programming Center</h1>
            <nav>
                <ul className='md:flex gap-3 items-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Dashboard</li>
                    <li><img className='w-10' src={img} alt="" /></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;