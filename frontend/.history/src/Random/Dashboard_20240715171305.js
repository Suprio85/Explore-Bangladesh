import React from 'react';
const url = "https://cdn.pixabay.com/photo/2020/04/15/09/16/castle-5045815_1280.jpg";

const Dashboard = () => {
    return ( 
        <div className='relative w-full h-screen bg-slate-900'>
            <div className='opacity-30 top-0 '><img src={url} alt="bg" className='w-full h-screen object-cover'></img></div>
            <div>
                <div className='absolute flex justify-center items-center w-2/3 h-full px-20  left-0 top-0 animate-_right '>
                    <div className='bg-white min-h-96 bg-opacity-30 w-full rounded-xl'>
                        HELLo
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