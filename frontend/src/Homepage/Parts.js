import React, { useEffect,useState,useRef } from 'react';
import Title from '../Util/title';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SVG from "../StaticImage/Alpona2.svg"

const Template = [
    {
        categoryName: 'DHaka',
        categoryImage: 'https://cdn.pixabay.com/photo/2023/08/23/11/24/sadarghat-8208329_1280.jpg',
        categoryDescription: `Dhaka, Bangladesh's vibrant capital, boasts an array of historical and cultural attractions, including the impressive Lalbagh Fort and the elegant Ahsan Manzil, also known as the Pink Palace. The bustling Sadarghat River Port offers a lively glimpse into the daily life along the Buriganga River. Spiritual landmarks such as the Star Mosque and Baitul Mukarram Mosque highlight the city's religious diversity. The Dhakeshwari Temple, a historic Hindu temple, provides insights into the cultural heritage of Dhaka. Additionally, the city's rich culinary scene and vibrant markets like New Market and Shankhari Bazaar offer a full sensory experience.`,
    },
    {
        categoryName: 'KHULNA',
        categoryImage: "https://images.pexels.com/photos/6113097/pexels-photo-6113097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoryDescription: "Khulna is a city in southwestern Bangladesh. It's known for its many rivers, including the wide Bhairab and Rupsha, which flow into the Bay of Bengal. The city is home to the centuries-old Shait Gumbad Mosque, with 60 domes, and the mausoleum of Khan Jahan, a saint who lived in the 15th century. The city's vast Central Park has a lake, bridges and a zoo. North of the city, the Sundarbans, a huge mangrove forest, is home to the Bengal tiger.",
    },
    {
        categoryName: 'Rangpur',
        categoryImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d4/8f/11/tajhat-palace-front-right.jpg?w=1000&h=800&s=1',
        categoryDescription: `Rangpur is a city in the northwestern part of Bangladesh and the divisional headquarter of Rangpur Division. It is one of the oldest municipalities in Bangladesh, and was established in 1869. The city is the third largest city in Bangladesh and forms a part of the greater Rangpur Division.`,
    },
    {
        categoryName: 'Rajshahi',
        categoryImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fb/7f/a5/pancharatna-shiva-mandir.jpg?w=2000&h=800&s=1",
        categoryDescription: "Rajshahi is a metropolitan city and a major urban, commercial and educational centre of Bangladesh. It is also the administrative seat of eponymous division and district. Located on the north bank of the Padma River, near the Bangladesh-India border, the city has a population of over 763,952 residents.",
    },
    {
        categoryName: 'chittagong',
        categoryImage: "https://cdn.pixabay.com/photo/2017/05/30/15/02/orient-2357224_1280.jpg",
        categoryDescription: `Chittagong, officially known as Chattogram, is a major coastal city and financial centre in southeastern Bangladesh. The city has a population of more than 2.5 million while the metropolitan area had a population of 4,009,423 in 2011, making it the second-largest city in the country. It is the capital of an eponymous district and division.`,
    },
    {
        categoryName: 'DHaka',
        categoryImage: "https://images.pexels.com/photos/6113097/pexels-photo-6113097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        categoryDescription: `Dhaka, Bangladesh's vibrant capital, boasts an array of historical and cultural attractions, including the impressive Lalbagh Fort and the elegant Ahsan Manzil, also known as the Pink Palace. The bustling Sadarghat River Port offers a lively glimpse into the daily life along the Buriganga River. Spiritual landmarks such as the Star Mosque and Baitul Mukarram Mosque highlight the city's religious diversity. The Dhakeshwari Temple, a historic Hindu temple, provides insights into the cultural heritage of Dhaka. Additionally, the city's rich culinary scene and vibrant markets like New Market and Shankhari Bazaar offer a full sensory experience.`,
    },
    {
        categoryName:"Sylhet",
        categoryImage:"https://cdn.pixabay.com/photo/2016/06/15/20/25/landscape-1459854_1280.jpg",
        categoryDescription:"Sylhet is a metropolitan city in northeastern Bangladesh. It is the administrative seat of Sylhet Division. The city is located on the right bank of the Surma River in northeastern Bengal. It has a subtropical climate and lush highland terrain. The city has a population of more than 500,000 residents.",
    },
    {
        categoryName:"Barishal",
        categoryImage:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Barishal_University_Campus%2C_Bangladesh.jpg",
        categoryDescription:"Barishal, officially known as Barishal City, is a major city that lies on the bank of Kirtankhola river in south-central Bangladesh. It is the largest city and the administrative headquarter of both Barishal District and Barishal Division. It is one of the oldest municipalities and river ports of the country.",
    },
    {
        categoryName:"Mymensingh",
        categoryImage:"https://upload.wikimedia.org/wikipedia/commons/9/90/A_front_view_of_Shashi_Lodge_4.jpg",
        categoryDescription:"Mymensingh is a city of Mymensingh Division in Bangladesh, situated on the Brahmaputra River. It is known as the City of Education for its cultural heritage and historical establishments. It is the fourth-largest city in Bangladesh.",
    }
    
]
const Categorycard = ({ category }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    
    return (
        <div className='w-80 h-96 relative group overflow-hidden hover:cursor-pointer hover:animate-growBig' style={{ height: '500px' }}>
            <div className='h-full w-full bg-slate-400'>
                <div className='text-white flex flex-col justify-center items-center w-full absolute bottom-20 z-20'>
                    <div className='relative -bottom-20 text-2xl font-bebasNeue group-hover:animate-glowUp'>{category.categoryName}</div>
                    <div className='relative px-20 text-center -bottom-28 group-hover:block hidden text-lg font-anek group-hover:animate-glowUp transition duration-500'>{category.categoryDescription}</div>
                    <div className='relative -bottom-36 group-hover:block hidden text-xl font-anek group-hover:animate-glowUp transition duration-500'><button
                    className='hover:text-2xl'
                    >KNOW MORE</button></div>
                </div>
                <div className='w-full h-full object-cover absolute bg-slate-900 top-0'>
                    <img src={category.categoryImage} alt='Image' className='w-full h-full object-cover group-hover:opacity-50'></img>
                </div>
            </div>
            <div>
                {/* <div className='absolute -top-28 left-0 w-full opacity-0 h-full group-hover:animate-glowDown z-20' style={{ height: '1000px' }}><img src={SVG}></img></div> */}
                <div className='absolute -bottom-32 left-0 h-96 w-full bg-gradient-to-t from-black group-hover:animate-glowUp z-10'></div>
            </div>
        </div>
    );
}

const Parts = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        const scrollSpeed = 2; // Adjust the speed as needed
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                if (scrollContainer) {
                    // Check if we've scrolled to the end
                    if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                        scrollContainer.scrollLeft = 0; // Reset to the start
                    } else {
                        scrollContainer.scrollLeft += scrollSpeed; // Scroll to the right
                    }
                }
            }, 30); // The interval in milliseconds
        };

        startScrolling();

        return () => clearInterval(scrollInterval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className='h-screen'>
            <div>
                <Title text="Diverse landscapes, unique beauty." />
            </div>
            <div ref={scrollContainerRef} className='flex flex-grow  justify-center overflow-scroll hide-scrollbar h-full  mx-20'>
                {Template.map((cat, index) => (
                    <div key={index} className='mx-1' data-aos="fade-down" data-aos-duration="1000">
                        <Categorycard category={cat} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Parts;
