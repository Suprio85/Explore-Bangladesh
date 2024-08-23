import React, { useEffect, useState } from 'react';
import Video from "../Video/StaticVideo.mp4";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'


const StaticVideo = [
    ["Tanguar Haor","Sunamganj"],
    ["Hill track","Chittagong"],
    ["Tea garden","Sylhet"],
    ["Capital"," Dhaka"],
    ["Sea Beach","Cox's Bazar"],
]



const VideoIntro = () => {
    const [videoVariable, setvideoVariable] = useState(0);
    const [text, setText] = useState(StaticVideo[videoVariable]);

    useEffect(() => {
        const interval = setInterval(() => {
            setvideoVariable((prevvideoVariable) => (prevvideoVariable + 1) % StaticVideo.length);
            setText(StaticVideo[videoVariable]);
        }, 5000);
        return () => clearInterval(interval);
    }, text);
    return (
        <div className='relative'>
            <div className=''>
                <video autoPlay loop muted className='h-screen w-full object-cover'>
                    <source src={Video} type="video/mp4"></source>
                </video>
            </div>
            <div className='flex items-center justify-center'>
                <div className='absolute z-10 bottom-20 flex ml-20 items-center  w-80'>
                    <div><FontAwesomeIcon icon={faLocationPin} size="lg" style={{ color: "#ffffff", }} /></div>
                    <div className='font-handrawn mx-2 text-3xl text-white z-40'>{StaticVideo[videoVariable][0]},{StaticVideo[videoVariable][1]}</div>
                </div>
                <div className='absolute ml-20 w-96 left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2'>
                    <div className='text-white font-titillium text-3xl'>explore</div>
                    <div className=' h-20  overflow-hidden'>
                        <div className='text-white text-7xl font-bebasNeue relative animate-textRevealbottomtoTop' >
                            {StaticVideo[videoVariable][0]}
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-between flex-col w-full opacity-50 text-white h-full top-0'>
                    <div className='bg-gradient-to-b from-slate-900 h-32'></div>
                    <div className='bg-gradient-to-t from-slate-900 h-32'></div>
                </div>
            </div>
        </div>
    );
}

export default VideoIntro;