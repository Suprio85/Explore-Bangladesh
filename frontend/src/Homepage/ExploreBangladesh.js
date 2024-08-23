import React, { useEffect } from 'react';
import StaticBG from "../StaticImage/Static1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from "../StaticImage/Asset 7.png";

const Description = "Discover the heart and soul of South Asia with a journey to Bangladesh, a country of incredible contrasts and untold stories. From the bustling streets of Dhaka, rich with centuries of history, to the tranquil beauty of the Sundarbans, home to the majestic Bengal tiger, Bangladesh offers a unique blend of the ancient and the modern. Explore tea gardens that stretch across rolling hills in Sylhet, navigate the vast network of rivers that define its landscapes, and indulge in the rich culinary traditions that reflect the spirit of its people. Bangladesh is not just a destination; it's an adventure that promises to captivate your senses and enrich your spirit. Join us in Bangladesh and experience a journey like no other, where every corner holds a new discovery and every moment is a memory in the making.";
const ExploreBangladesh = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (<div className='relative bg-slate-900 h-screen w-full'>
        <div className='opacity-45 h-full '><img src={StaticBG} alt="Bg" className='h-full w-full object-cover'></img></div>
        <div className='absolute w-2/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' >
            <div className='text-white  font-titillium text-5xl flex justify-center mb-14' data-aos="fade-up" data-aos-duration="1000" >Explore Bangladesh</div>
            <div className='text-white text-center font-anek text-xl' data-aos="fade-down" data-aos-duration="1000">{Description}</div>
        </div>
        <div className='w-full h-44 bg-gradient-to-t from-white absolute bottom-0 '></div>
        <div className=' w-full absolute -top-28 flex justify-between overflow-hidden'>
            <div className=' h-56 w-56  relative -left-28 animate-rotate'  ><div data-aos="zoom-in-right" data-aos-duration="1000"><img src={Sidebar} alt="sidebar" className=' w-72 '></img></div></div>
            <div className=' h-56 w-56 relative -right-28 animate-rotate'><div data-aos="zoom-in-left" data-aos-duration="1000"><img src={Sidebar} alt="sidebar"  className=' w-72 '></img></div></div>
        </div>
    </div>);
}

export default ExploreBangladesh;