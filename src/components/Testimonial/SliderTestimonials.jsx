import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import "./slider.css";

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
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const SliderTestimonials = () => (
    <Carousel responsive={responsive}>
        {testimonials.map((item) => {
            const { id, image, name, title, quote } = item;
            return (
                <article key={id} className="flex flex-col justify-between">
                    {/* <FaQuoteRight className="person-icon" /> */}
                    <p className="person-text">{quote}</p>
                    <div className="flex items-center ">
                        <div className="text-left">
                            <img
                                src={image}
                                alt={name}
                                className="person-img"
                            />
                        </div>
                        <div className="flex flex-col text-left ">
                            <h5 className="person-name">{name}</h5>
                            <p className="person-title">{title}</p>
                        </div>
                    </div>
                </article>
            );
        })}
    </Carousel>
);

export default SliderTestimonials;
