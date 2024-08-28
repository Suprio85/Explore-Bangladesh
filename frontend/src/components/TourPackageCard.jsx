import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";


const isAdded = (cartItems, id) => {
   const bool = cartItems.some((item) => item.tour_package_id === id);
    return bool;
}




const TourPackageCard = ({ tourPackage,cartItems,setCartItems }) => {



    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = React.useState(false);
    const [added , setAdded] = React.useState(false);

    useEffect(() => {
        setAdded(isAdded(cartItems, tourPackage.id));
    },[cartItems,tourPackage.id]);

    const handleFavouriteClick = () => {
        if (!localStorage.getItem('token')) {
            navigate('/signup');
            return;
        }
        if(!isFavorited)
        toast.success( "Added to favourites");
        setIsFavorited(!isFavorited);
    }

    const handleClickCart = async() => {
        if (!localStorage.getItem('token')) {
            navigate('/signup');
            return;
        }
        if(!added){
            const newCartItems = [...cartItems, {tour_package_id: tourPackage.id, quantity: 1, price: tourPackage.price, name: tourPackage.name}];
            setCartItems(newCartItems);
            setAdded(true);
            toast.success( "Added to cart");
            const response = await fetch('http://localhost:5000/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.token}`
                },
                body: JSON.stringify({
                    id: tourPackage.id,
                    quantity: 1,
                    price: tourPackage.price,
                }),
            });
            const data =await response.json();
            console.log(data);
        }
        
    }
   

    return (
        <div key={tourPackage.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
        <div>
          <div className="relative">
            <img src={tourPackage.imageUrl} alt={tourPackage.name} className="w-full h-48 object-cover" />
            <div className="absolute top-0 right-0 p-2">    
              <button
                className="border border-slate-800 rounded-full p-1"
                onClick={handleFavouriteClick}>
                {isFavorited ? <FaHeart size={20} /> : <CiHeart size={20} />}
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{tourPackage.name}</h3>
            <div className="flex items-center mt-2">
             <IoMdStar className="text-yellow-500" />
              <span className="text-green-500 text-sm font-medium">{tourPackage.rating.substring(0,3)}</span>
            </div>
            <p className="mt-1 text-gray-700 text-sm">Duration: {tourPackage.tour_duration} days</p>
            <p className="mt-2 text-gray-600">
              {tourPackage.description.substring(0, 50)}...<Link className="text-blue-500" to="/">
                read more
              </Link>
            </p>
          </div>
        </div>
        <div className='flex ml-5'>
           <span className={`font-medium ${tourPackage.group_size-tourPackage.total_enrollment>0? 'text-green-600':'text-amber-700' }`} >
            {
             tourPackage.group_size-tourPackage.total_enrollment>0?`Available: ${tourPackage.group_size-tourPackage.total_enrollment}`:'Sold Out'
            }
            </span> 
        </div>
        <div className="flex justify-end items-center py-0 px-4">
          <button className={`${!added ?  "flex justify-center items-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 hover:border border-slate-700 transition duration-300":
          "flex justify-center items-center bg-white border border-gray-300 rounded-lg px-4 py-2"
          }`}
          onClick={handleClickCart}
          >
           {added ? <TiInputChecked size={22}  className='mr-1'></TiInputChecked> : <FaShoppingCart className='mr-2' />}
          </button>
        </div>
        <div className="px-4 py-2 flex justify-between items-center m-0">
          <span className="text-xl font-bold text-gray-800">${tourPackage.price / 10}</span>
          <Link to={`/tourpackage/${tourPackage.id}`} className="text-indigo-600 hover:text-indigo-800 transition duration-300">
            See Details
          </Link>
        </div>
      </div>
    </div>
    );
};

export default TourPackageCard;