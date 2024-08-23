import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (<div className=' w-full h-20 flex fixed z-50' style={{ backgroundColor: 'rgba(0,0,0,0' }}>
        <div className='w-1/4  h-full flex items-center justify-center'>
            <Link to="/">
                <div className='flex text-white items-center justify-center'>
                    <div className='font-handrawn text-2xl relative bottom-1 mr-1'>explore</div>
                    <div className='font-bebasNeue text-2xl'>BANGLADESH</div>
                </div>
            </Link>
        </div>
        <div className='flex-grow  h-full flex justify-center items-center'>
            <div className='flex w-2/3 justify-evenly font-ubuntu text-white text-xl'>
                <div>EXPLORE</div>
                <div>EXPERIENCE</div>
                <div>PLAN</div>
            </div>
        </div>
        <div className='w-1/4  h-full flex justify-center items-center'>
            <div className='font-ubuntu  text-white text-xl'><Link to="/signup">SIGN IN</Link></div>
        </div>
    </div>);
}

export default Navbar;