import React from 'react';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



const TourPackageCard = ({ tourPackage }) => {
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = React.useState(false);

    const handleFavouriteClick = () => {
        if (!localStorage.getItem('token')) {
            navigate('/signup');
            return;
        }
        if(!isFavorited)
        toast.success( "Added to favourites");
        setIsFavorited(!isFavorited);
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
              <span className="text-green-500 text-sm font-medium">{tourPackage.rating}</span>
              <span className="ml-2 text-gray-500 text-sm">({tourPackage.reviews} reviews)</span>
            </div>
            <p className="mt-2 text-gray-600">
              {tourPackage.description.substring(0, 50)}...<Link className="text-blue-500" to="/">
                read more
              </Link>
            </p>
          </div>
        </div>
        <div className="p-4 flex justify-between items-center mt-auto">
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