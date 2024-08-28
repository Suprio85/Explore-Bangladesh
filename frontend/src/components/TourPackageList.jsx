import React, { useEffect, useState } from 'react';
import TourPackageCard from './TourPackageCard'; // Adjust the import path as needed

const TourPackagesList = ({tourPackages,cartItems,setCartItems}) => {
  
    return (
        <div className="flex flex-wrap min-h-80">
            {tourPackages.map((tourPackage) => (
                <TourPackageCard key={tourPackage.id} tourPackage={tourPackage} cartItems={cartItems} setCartItems={setCartItems} />
            ))}
        </div>
    );
};

export default TourPackagesList;
