import React, { useState }from 'react';
import './StarRating.css';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return(
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue =  i + 1;

                return(
                    <label>
                        <input 
                        type = "radio" 
                        name = "rating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                        className = "star" 
                        color={ratingValue <= (rating || rating) ? "#ffc107" : "#a9a9a9" } 
                        size = {20}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        />
                    </label>
                )
            })}
            <p>{rating} out of 5</p>
        </div>
    );
};


export default StarRating