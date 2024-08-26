import React, { useEffect, useState } from 'react';
import TourPackageCard from './TourPackageCard'; // Adjust the import path as needed

const TourPackagesList = () => {
    const [tourPackages, setTourPackages] = useState([{
        id: 1,
        name: "Guthia Mosque",
        description: "A beautiful religious site located in Barisal.",
        price: 250,
        rating: 4.5,
        reviews: 17,
        imageUrl: "https://example.com/image.jpg"
    }
    ]);



    useEffect(() => {
        const fetchTourPackages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/tp');
                const data = await response.json();
                console.log(data);
                setTourPackages(data);
            } catch (error) {
                console.error("Error fetching tour packages:", error);
            }
        };

         fetchTourPackages();
    }, []);

    return (
        <div className="flex flex-wrap">
            {tourPackages.map((tourPackage) => (
                <TourPackageCard key={tourPackage.id} tourPackage={tourPackage} />
            ))}
        </div>
    );
};

export default TourPackagesList;
