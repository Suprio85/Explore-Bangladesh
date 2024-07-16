import React, { useEffect, useState } from 'react';
const url = "https://cdn.pixabay.com/photo/2020/04/15/09/16/castle-5045815_1280.jpg";

const Dashboard = () => {
    
    const [name, SetName] = useState(" ");
    const [email, SetEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [country, setCountry] = useState(" ");
    const [division, setDivision] = useState(" ");
    const [city, setCity] = useState(" ");
    const [street, setStreet] = useState(" ");
    const [postal_code, setPostal_code] = useState(" ");
    
    const getProfile =async ()=>{
        console.log("token "+localStorage.token);
        try {
            const res= await fetch("http://localhost:5000/api/user/profile",{
                method :"GET",
                headers:{
                    token:localStorage.token
                }
            });
            const parseData = await res.json();
            if(res.ok){
                SetName(parseData.name);
                SetEmail(parseData.email);
                setPassword(parseData.password);
                setCountry(parseData.country);
                setDivision(parseData.division);
                setCity(parseData.city);
                setStreet(parseData.street);
                setPostal_code(parseData.postal_code);
            }
            else {
                console.error("Failed to Fetch");
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(()=>{
        getProfile();
    },[])
    
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
                <div>
                    <button className=' mx-1 font-ubuntu hover:cursor-pointer' onClick={logout}>LOG OUT</button>
                </div>
            </div>
            
        </div>
     );
}
 
export default Dashboard;