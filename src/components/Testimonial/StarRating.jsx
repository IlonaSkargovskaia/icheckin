import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < rating;
        return isFilled ? <FaStar key={index} /> : <FaRegStar key={index} />;
    });

    return <div className="star-rating flex justify-center my-4">{stars}</div>;
};

export default StarRating;
