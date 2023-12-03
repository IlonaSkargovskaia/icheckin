import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "./data";
import "./slider.css";
import StarRating from "./StarRating";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const SliderTestimonials = () => (
    <Carousel responsive={responsive}>
        {testimonials.map((item) => {
            const { id, image, name, title, quote, rating } = item;
            return (
                <article key={id} className="flex flex-col justify-between">
                    <div>
                        <img src={image} alt={name} className="person-img" />
                        <h5 className="person-name">{name}</h5>
                        <p className="person-title">{title}</p>

                        <p className="person-text">{quote}</p>
                    </div>
                    <div>
                        <StarRating rating={rating} />
                    </div>
                </article>
            );
        })}
    </Carousel>
);

export default SliderTestimonials;
