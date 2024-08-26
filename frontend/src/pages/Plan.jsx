import TourPackagesList from "../components/TourPackageList";
import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import suggestions from "../Util/suggestion";
import SearchBar from "../components/Searchbar";

const Plan = () => {
    const [filterOpen, setFilterOpen] = useState(false);

    const handleFilterClick = () => {
      setFilterOpen(!filterOpen);
    };



  return (
    <div>
     <div className="flex items-center justify-center m-6">
      <SearchBar suggestions={suggestions} />
    </div>
    <button
          className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 ml-4 shadow-sm hover:shadow-md transition-shadow duration-300"
          onClick={handleFilterClick}
        >
          <FaFilter className="text-gray-500 mr-2" />
          <span className="text-gray-700 font-semibold">Filter</span>
    </button>
      {filterOpen && (
        <div className="bg-white p-4 rounded-full mb-6">
          <div className="flex justify-between">
            <select className="border border-gray-300 rounded-lg p-2">
              <option value="">Select a Price Range</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
              <option value="all">All</option>
            </select>
            <select className="border border-gray-300 rounded-lg p-2 ml-4">
              <option value="">Select a Rating</option>
              <option value="4+">4+ Stars</option>
              <option value="3+">3+ Stars</option>
            </select>
          </div>
        </div>
      )}
    <TourPackagesList />
    </div>
  )
}

export default Plan