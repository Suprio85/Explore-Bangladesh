import React, { useState } from 'react';
const url = "https://cdn.pixabay.com/photo/2020/04/15/09/16/castle-5045815_1280.jpg";

const Dashboard = () => {
    
    const [name, SetName] = useState("MIM ");
    const [email, SetEmail] = useState("MIM ");
    const [password, setPassword] = useState("MIM ");
    const [confirm_password, setConfirm_Password] = useState("MIM ");
    const [country, setCountry] = useState("MIM ");
    const [division, setDivision] = useState("MIM ");
    const [city, setCity] = useState("MIM ");
    const [street, setStreet] = useState("MIM ");
    const [postal_code, setPostal_code] = useState("MIM ");
    
    
    return ( 
        <div className='relative w-full h-screen bg-slate-900'>
            <div className='opacity-30 top-0 '><img src={url} alt="bg" className='w-full h-screen object-cover'></img></div>
            <div>
                <div className='absolute flex justify-center items-center w-2/3 h-full px-20  left-0 top-0 animate-_right '>
                    <div className='bg-white min-h-96 bg-opacity-20 w-full rounded-xl flex-col justify-center items-center flex'>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>NAME</div>
                            <div className='flex-grow text-white font-titillium'>{name}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>EMAIL</div>
                            <div className='flex-grow text-white font-titillium'>{email}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>PASSWORD</div>
                            <div className='flex-grow text-white font-titillium'>{password}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>COUNTRY</div>
                            <div className='flex-grow text-white font-titillium'>{country}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>DIVISION</div>
                            <div className='flex-grow text-white font-titillium'>{division}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>CITY</div>
                            <div className='flex-grow text-white font-titillium'>{city}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>STREET</div>
                            <div className='flex-grow text-white font-titillium'>{street}</div>
                        </div>
                        <div className='w-2/3 text-xl full h-full flex'>
                            <div className='w-1/3 text-white font-ubuntu'>POSTAL CODE</div>
                            <div className='flex-grow text-white font-titillium'>{postal_code}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-20 font-saira text-white text-xl w-full flex justify-center'>
                <div>Already Have An Account ?
                    <button className=' mx-1 font-ubuntu hover:cursor-pointer'>LOG IN</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Dashboard;