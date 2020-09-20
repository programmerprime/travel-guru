import React from 'react';
import './FinalBook.css';
import image1 from '../Image/Rectangle 26.png';
import image2 from '../Image/Rectangle 27.png';
import image3 from '../Image/Rectangle 28.png';
import Room from './Room';


const rooms = [
    {
        id: 1,
        name: "Light bright airy stylish apt & safe peaceful stay",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        rating: 4.9,
        ratingCount: 20,
        price: 34,
        desc1: "Wif Air Conditionning Kithen",
        desc2: "Cncellation fexibility available",
        img: image1

    },
    {
        id: 2,
        name: "Apartment in Lost Panorama",
        guests: 2,
        bedrooms: 1,
        beds: 1,
        baths: 1,
        rating: 4.8,
        ratingCount: 10,
        price: 25,
        desc1: "Wif Air Conditionning Kithen",
        desc2: "Cncellation fexibility available",
        img: image2

    },
    {
        id: 3,
        name: "AR Lounge and pool (r&r + b&b)",
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        rating: 5,
        ratingCount: 25,
        price: 44,
        desc1: "Wif Air Conditionning Kithen",
        desc2: "Cncellation fexibility available",
        img: image3
    }
]

const FinalBook = () => {
    return (
        <div className="FinalBook">
            
            <div className="rooms">

                {
                    rooms.map(room => <Room key={room.id} room={room} />)
                }

            </div>

            <div className="map">
                    <h1>Google maps api here</h1>
            </div>

        </div>
    );
};

export default FinalBook;