import React, { useEffect } from 'react';
import Title from '../Util/title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVG from "../StaticImage/Alpona2.svg"

const Template = [
    {
        categoryName: 'DHaka',
        categoryImage: "https://images.pexels.com/photos/6113097/pexels-photo-6113097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoryDescription: `Dhaka, Bangladesh's vibrant capital, boasts an array of historical and cultural attractions, including the impressive Lalbagh Fort and the elegant Ahsan Manzil, also known as the Pink Palace. The bustling Sadarghat River Port offers a lively glimpse into the daily life along the Buriganga River. Spiritual landmarks such as the Star Mosque and Baitul Mukarram Mosque highlight the city's religious diversity. The Dhakeshwari Temple, a historic Hindu temple, provides insights into the cultural heritage of Dhaka. Additionally, the city's rich culinary scene and vibrant markets like New Market and Shankhari Bazaar offer a full sensory experience.`,
    },
    {
        categoryName: 'Hill Track',
        categoryImage: "https://cdn.pixabay.com/photo/2023/05/10/10/33/keokradong-7983537_1280.jpg",
        categoryDescription: "Lorem Ipsum",
    },
    {
        categoryName: 'Mangrove Area',
        categoryImage: "https://images.pexels.com/photos/726298/pexels-photo-726298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoryDescription: "Lorem Ipsum",
    },
    {
        categoryName: 'Mangrove Area',
        categoryImage: "https://images.pexels.com/photos/6113097/pexels-photo-6113097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoryDescription: "Lorem Ipsum",
    },
    {
        categoryName: 'Historical Places',
        categoryImage: "https://cdn.pixabay.com/photo/2017/08/30/22/33/fort-aurangabad-2698844_1280.jpg",
        categoryDescription: "Lorem Ipsum",
    },
    {
        categoryName: 'Historical Places',
        categoryImage: "https://cdn.pixabay.com/photo/2017/08/30/22/33/fort-aurangabad-2698844_1280.jpg",
        categoryDescription: "Lorem Ipsum",
    },
]
const Categorycard = ({ category }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    
    return (
        <div className='w-44 h-96  relative group overflow-hidden hover:cursor-pointer hover:animate-grow' style={{height:'500px'}}>
            <div className=' h-full w-full bg-slate-400'>
                <div className='text-white flex flex-col justify-center items-center w-full absolute bottom-20  z-20 '>
                    <div className='relative top-10 text-2xl font-bebasNeue group-hover:animate-glowUp'>{category.categoryName}</div>
                    <div className='relative top-10 group-hover:block hidden text-xl font-anek group-hover:animate-glowUp'>{category.categoryDescription}</div>
                    <div className='relative -bottom-36 group-hover:block hidden text-xl font-anek group-hover:animate-glowUp'><button>KNOW MORE</button></div>
                </div>
                <div className='w-full h-full object-cover absolute top-0'><img src={category.categoryImage} alt='Image' className='w-full h-full object-cover'></img></div>
            </div>
            <div className=''>
                <div className='absolute -top-28 left-0 w-full  opacity-50  h-full group-hover:animate-glowDown z-20 ' style={{ height: '1000px' }}><img src={SVG}></img></div>
                <div className='absolute -bottom-32 left-0 h-96 w-full bg-gradient-to-t  from-black group-hover:animate-glowUp z-10'></div>
            </div>
        </div>
    )
}
const Parts = () => {
    return (
        <div className='h-screen'>
            <div>
                <Title text="Diverse landscapes, unique beauty." />
            </div>
            <div className='flex flex-grow  justify-center overflow-scroll hide-scrollbar h-full  mx-20 ' >
                {
                    Template.map((cat, key) => (
                        <div className=' mx-1 flex-' data-aos="fade-down" data-aos-duration="1000">
                            <Categorycard category={cat} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Parts;
