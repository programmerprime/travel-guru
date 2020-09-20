import React from 'react';
import './TravelCard.css';


const TravelCard = (props) => {
    return (
        <div onClick={() => props.handleClick(props.destination)} className="TravelCard" style={{backgroundImage: `url(${props.image})`}}>

            <h2 className="destination">{props.destination}</h2>
           
            
        </div>
    );
};

export default TravelCard;