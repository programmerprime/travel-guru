import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './BookingPage.css';

const BookingPage = () => {

    const {place} = useParams();

    console.log(place);



    return (
        <div className="booking-page">
            
            <div className="booking_information">
                    <h1 style={{color: 'white'}}>{place}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique eius a architecto incidunt nobis omnis! Voluptatum qui labore aperiam ad sed nulla laboriosam reprehenderit molestiae numquam alias corrupti atque ducimus officiis aut ratione quasi enim voluptas quidem, nobis ullam aliquid! Commodi sit libero, hic qui odio quidem corporis! Corrupti, tempore!</p>
            </div>

            <div className="booking_cart">
                    <form>
                        <label>Origin</label><br/>
                        <input type="text" value="Dhaka"/>
                            <br/>
                        <label>Destination</label><br/>
                        <input type="text" value={`${place}`}/>

                        <br/><br/>
                        
                        <label htmlFor="from">From: </label><br/>
                        <input type="date" required  /><br/>
                        <label htmlFor="to">To: </label><br/>
                        <input type="date" required /><br/><br/>

                        <button><Link to={`/finalbook/${place}`}>Book Now</Link></button>

                    </form>
            </div>

        </div>
    );
};

export default BookingPage;