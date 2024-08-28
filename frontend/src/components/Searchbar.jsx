import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import suggestions from "../Util/suggestion";
const SearchBar = ({query,filteredSuggestions,handleInputChange,handleSuggestionClick}) => {
  
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-300 focus-within:shadow-lg transition-shadow duration-300 overflow-hidden">
        <FaSearch className="text-gray-500 ml-3" />
        <input
          type="text"
          className="w-full px-4 py-2 text-gray-700 focus:outline-none rounded-full"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-b-lg shadow-lg z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <p
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={(e) => handleSuggestionClick(e,suggestion)}
            >
              {suggestion}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
