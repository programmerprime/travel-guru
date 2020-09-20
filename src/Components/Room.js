import React from 'react';
import './Room.css';
import starImage from '../Icon/star_1_.png';


const Room = (props) => {

    const {id, name, guests, bedrooms, beds, baths, rating, ratingCount, price, desc1, desc2, img} = props.room;

    return (
        <div className="room">
           <div className="image">
                <img src={img} alt=""/>
           </div>
           <div className="description">
               <h5>{name}</h5>
            <p>{guests} guests {bedrooms} bedrooms {beds} beds {baths} baths</p>
            <p>{desc1}</p>
            <p>{desc2}</p>

            <div className="extra__information">

                <div className="rating">
                    <img src={starImage} alt=""/>
                    <p>{rating} ({ratingCount})</p>
                </div>

            <h6>${price}/night</h6>

            </div>

           </div>
        </div>
    );
};

export default Room;