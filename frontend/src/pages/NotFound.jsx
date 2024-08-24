import React from 'react';
import { Link } from 'react-router-dom';
import { IoWarning } from "react-icons/io5";

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <IoWarning className="text-9xl text-gray-500" />
            <div className="text-6xl font-bold text-gray-800">404</div>
            <div className="text-2xl text-gray-600 mt-4">Oops! Page not found</div>
            <div className="text-gray-500 mt-2 text-center max-w-md">
                The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
            </div>
            <Link to="/" className="mt-6">
                <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-gray-800 hover:outline-black hover:outline transform transition duration-300">
                    Go Back Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;