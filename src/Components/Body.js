import React, { useState } from 'react';
import './Body.css';
import TravelCard from './TravelCard';
import Sreemangal from '../Image/Sreemongol.png';
import Sajek from '../Image/Sajek.png';
import Sundarban from '../Image/sundorbon.png';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Body = () => {

    const [place, setPlace] = useState("");

    const handleClick = (destination) => {
        console.log(destination)
        setPlace(destination);
    }

    return (
        <>
        <div className="body">
           <TravelCard image={Sreemangal} destination="Sreemangal" handleClick={handleClick}/>
           <TravelCard image={Sundarban} destination="Sundarban" handleClick={handleClick} />
           <TravelCard image={Sajek} destination="Sajek" handleClick={handleClick} />
        </div>

        {
            !place ? (<h1 style={{color: 'white', textAlign: 'center'}}>Please select a destination</h1>) : (
                <div className="placeDetails">
                <h3>{place}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat commodi dolorum tempora, rerum natus corporis, dolores magni temporibus a nihil. Blanditiis, ullam? Nobis recusandae sunt qui dolorem molestias magnam.</p>
                <Link to={`/book/${place}`}><button className="book-btn">Book now</button></Link>
            </div>
            )
        }


        </>
       
    );
};

export default Body;