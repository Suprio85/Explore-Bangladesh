import React from 'react';
const url = "https://cdn.pixabay.com/photo/2020/04/15/09/16/castle-5045815_1280.jpg";
const Dashboard = () => {
    return ( 
        <div className='relative w-full h-screen bg-slate-900'>
            <div className='opacity-30 top-0 '><img src={url} alt="bg" className='w-full h-screen object-cover'></img></div>
            <div>
                <div className='absolute w-2/3 right-0 top-0 animate-_right '>
                  
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