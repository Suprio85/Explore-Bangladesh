import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({setAuth}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [token,setToken]=useState(localStorage.getItem('token'))
    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('isAuthenticated');
        setAuth(false);
        setToken('')
        navigate('/')
    }
    const [user,setUser] = useState({});
    useEffect(()=>{
        const getUser = async ()=>{
            try {
                const res = await fetch("http://localhost:5000/api/user/profile",{
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const parseData = await res.json();
                setUser(parseData);
            } catch (error) {
                console.error(error.message);
            }
        }
        if(token)
        getUser();
    },[token])

    const isHome = location.pathname === '/' || location.pathname === '/dashboard'|| location.pathname === '/signup';
    const textColor = isHome ? 'text-white' : 'text-black';
    const navbarStyle = isHome ? 'fixed bg-transparent' : 'static bg-white';

    return (
        <div className={`w-full h-20 flex z-50 ${navbarStyle}`}>
            <div className='w-1/4 h-full flex items-center justify-center'>
                <Link to="/">
                    <div className={`flex items-center justify-center ${textColor}`}>
                        <div className='font-handrawn text-2xl relative bottom-1 mr-1'>explore</div>
                        <div className='font-bebasNeue text-2xl'>BANGLADESH</div>
                    </div>
                </Link>
            </div>
            <div className='flex-grow h-full flex justify-center items-center'>
                <div className={`flex flex-wrap w-2/3 justify-evenly font-ubuntu text-xl ${textColor} space-x-4`}>
                    <div>EXPLORE</div>
                    <div>EXPERIENCE</div>
                    <div>
                        <Link to="/plan">PLANS</Link>    
                  </div>
                </div>
            </div>
            {token ? (
                <div className='w-1/4 flex justify-center items-center space-x-3 flex-wrap'>
                    <div className={`font-ubuntu text-sm bg-slate-800 text-white rounded-full px-2 py-1 transform hover:text-black hover:bg-white duration-500 hover:border-2 hover:border-black`}>
                        <Link to="/dashboard">{user?.name}</Link>
                    </div>
                    <button type='click' className={`font-ubuntu text-sm hover:text-base hover:underline transform duration-300 ${textColor}`}
                        onClick={logout}>
                        LOGOUT
                    </button>
                </div>
            ) : (
                <div className='w-1/4 h-full flex  justify-center items-center'>
                    <div className={`font-ubuntu text-xl ${textColor}`}>
                        <Link to="/signup">SIGN IN</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;