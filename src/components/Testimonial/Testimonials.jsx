import React from "react";
import SliderTestimonials from "./SliderTestimonials";

const Testimonials = () => {
    return (
        <section className="testimonials mb-32">
            <div className="container mx-auto">
                <div className="testimonial-header text-center">
                    <div className="subtitle">- Customers Feedback</div>
                    <h2 className="title">
                      Read What Our Users say about i-Checkin App 
                    </h2>
                </div>
                <div className="testimonial-reviews w-5/6 mx-auto mt-24">
                    <SliderTestimonials />
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
