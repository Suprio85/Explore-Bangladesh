import TourPackagesList from "../components/TourPackageList";
import React, { useState, useEffect } from 'react';
import { FaFilter } from 'react-icons/fa';
import suggestions from "../Util/suggestion";
import SearchBar from "../components/Searchbar";
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../components/Cart';

const Plan = ({ cartItems, setCartItems }) => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [tourPackages, setTourPackages] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [queryResults, setQueryResults] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleCartClick = () => {
        setIsCartOpen(!isCartOpen);
    };

    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i");
        return tourPackages.filter(
            (pkage) =>
                regex.test(pkage.name) ||
                regex.test(pkage.description) ||
                regex.test(pkage.price)
        );
    };

    const handleFilterClick = () => {
        setFilterOpen(!filterOpen);
    };

    useEffect(() => {
        const fetchTourPackages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/tp');
                const data = await response.json();
                console.log(data);
                setTourPackages(data);
                setFilteredPackages(data);
            } catch (error) {
                console.error("Error fetching tour packages:", error);
            }
        };

        fetchTourPackages();
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value) {
            const filtered = suggestions.filter((suggestion) =>
                suggestion.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);

            // Update the search results based on the query
            const searchResult = filterPrompts(value);
            setQueryResults(searchResult);
            setFilteredPackages(searchResult);  // Update filteredPackages with the search results
        } else {
            setFilteredSuggestions([]);
            setFilteredPackages(tourPackages);  // Reset to all packages when the query is cleared
        }
    };

    const handleSuggestionClick = (e, suggestion) => {
        console.log('Suggestion clicked:', suggestion);
        setQuery(suggestion);
        setFilteredSuggestions([]);

        const searchResult = filterPrompts(suggestion);
        setQueryResults(searchResult);
        setFilteredPackages(searchResult);  // Update filteredPackages with the search results
    };

    const handleOptionChange = (pricevalue = undefined, ratingvalue = undefined) => {
        console.log('Price value:', pricevalue);
        console.log('Rating value:', ratingvalue);
        let packageList = queryResults.length > 0 && query !== '' ? [...queryResults] : [...tourPackages];

        if (pricevalue) {
            if (pricevalue === 'ASC') {
                packageList.sort((a, b) => a.price - b.price);
                console.log('Sorted:', packageList);
            } else if (pricevalue === 'DESC') {
                packageList.sort((a, b) => b.price - a.price);
                console.log('Sorted:', packageList);
            }
        }
        if (ratingvalue) {
            packageList = packageList.filter((pkage) => {
                if (ratingvalue === '4+') {
                    return pkage.rating >= 4;
                } else if (ratingvalue === '3+') {
                    return pkage.rating >= 3;
                }
                return true;
            });
        }

        setFilteredPackages(packageList);
    };

    return (
        <div>
            <div className="flex items-center justify-between m-6">
            </div>
            <div className=" flex flex-shrink items-center justify-center m-6">
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    filteredSuggestions={filteredSuggestions}
                    setFilteredSuggestions={setFilteredSuggestions}
                    handleInputChange={handleInputChange}
                    handleSuggestionClick={handleSuggestionClick}
                />
                <button className="relative flex items-center space-x-1" onClick={handleCartClick}>
                    <FaShoppingCart size={28} className="text-gray-600 hover:text-gray-800" />
                    {cartItems.length > 0 && (
                        <span className="absolute bottom-4 left-3 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                            {cartItems.length}
                        </span>
                    )}
                </button>
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
                        <select className="border border-gray-300 rounded-lg p-2"
                            onChange={(e) => handleOptionChange(e.target.value)}
                        >
                            <option value="">Select a Price Range</option>
                            <option value="ASC">Low to High</option>
                            <option value="DESC">High to Low</option>
                            <option value="all">All</option>
                        </select>
                        <select className="border border-gray-300 rounded-lg p-2 ml-4"
                            onChange={(e) => handleOptionChange(undefined, e.target.value)}
                        >
                            <option value="">Select a Rating</option>
                            <option value="4+">4+ Stars</option>
                            <option value="3+">3+ Stars</option>
                        </select>
                    </div>
                </div>
            )}
            <TourPackagesList
                tourPackages={filteredPackages}
                cartItems={cartItems}
                setCartItems={setCartItems} />
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartItems={cartItems} setCartItems={setCartItems} />
        </div>
    );
};

export default Plan;
