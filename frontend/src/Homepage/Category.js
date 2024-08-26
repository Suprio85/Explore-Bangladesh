import React, { useEffect,useState } from 'react';
import Title from '../Util/title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVG from "../StaticImage/Alpona2.svg"


const Categorycard = ({ category }) => {
    console.log(category);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    
    return (
        <div className='w-60 h-96  relative group overflow-hidden hover:cursor-pointer hover:animate-grow'>
            <div className=' h-full w-full bg-slate-400'>
                <div className='text-white flex flex-col justify-center items-center w-full absolute bottom-20  z-20 '>
                    <div className='relative top-10 text-2xl font-bebasNeue group-hover:animate-glowUp'>{category.name}</div>
                    <div className='relative top-10 group-hover:block hidden text-xl font-anek group-hover:animate-glowUp '>{category.description}</div>
                    <div className='relative -bottom-36 group-hover:block hidden text-xl font-anek group-hover:animate-glowUp '><button>KNOW MORE</button></div>
                </div>
                <div className='w-full h-full object-cover absolute top-0'><img src={category.image_url} alt='Image' className='w-full h-full object-cover'></img></div>
            </div>
            <div className=''>
                <div className='absolute -top-28 left-0 w-full  opacity-50  h-full group-hover:animate-glowDown z-20 ' style={{ height: '1000px' }}><img src={SVG}></img></div>
                <div className='absolute -bottom-32 left-0 h-96 w-full bg-gradient-to-t  from-black group-hover:animate-glowUp z-10'></div>
            </div>
        </div>
    )
}
const Category = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=> { 
        const fetchData = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/category');
            const data = await response.json();
            console.log(data);
            if(response.ok){
                setCategories(data);
            }else{
                console.log('Error');
            }
    
        }catch(err){
            console.log(err)
        }
    }
    fetchData();
        }, [])
    return (
        <div className='h-screen'>
            <div>
                <Title key={123} text="Discover Your Choice" />
            </div>
            <div className='flex flex-grow  justify-center overflow-scroll hide-scrollbar h-full  mx-20 ' >
                {
                    categories.map((cat) => (
                        <div key={cat.id} className=' mx-1 flex-' data-aos="fade-down" data-aos-duration="1000">
                            <Categorycard category={cat} />
                        </div>
                   ))
                }
            </div>
        </div>
    );
}

export default Category;
