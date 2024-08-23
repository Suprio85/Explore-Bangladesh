import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVG from "../StaticImage/Alpona.svg"
const Title = ({text}) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return ( <div className='w-full px-20 '>
        <div className=' font-handrawn text-3xl' data-aos="fade-left" data-aos-duration="1000">{text}</div>
        <div className='w-36 relative left-36 -top-12 opacity-30' data-aos="fade-right" data-aos-duration="1000"><img src={SVG} alt="SVG" className='opacity-20'></img></div>
    </div> );
}
 
export default Title;