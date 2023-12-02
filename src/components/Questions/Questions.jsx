import React, { useState } from "react";
// import faq from "../../assets/images/mac-frame.webp";
import videoSrc from "../../assets/images/video.mp4";
import { faqData } from "./data";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="questions my-32" id="faq">
            <div className="container mx-auto w-5/6 ">
                <div className="flex gap-8 justify-between items-center sm:flex-wrap lg:flex-nowrap">
                    <div className="col-left sm:w-full lg:w-1/2">
                        <div className="questions-header flex flex-col">
                            <div className="subtitle">- FAQ</div>
                            <h2 className="title mb-12">
                                Questions? Look here.
                            </h2>

                            
                        </div>
                        <div className="accordion pl-16">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`accordion-item acc mb-4 ${
                                            activeIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        <div
                                            className="accordion-header flex items-center justify-between  "
                                            onClick={() =>
                                                handleAccordionClick(index)
                                            }
                                        >
                                            <h3 className="font-normal ">
                                                {item.question}
                                            </h3>
                                            <div className="ml-8">
                                                {activeIndex === index ? (
                                                    <SlArrowUp className="q-icon" />
                                                ) : (
                                                    <SlArrowDown className="q-icon" />
                                                )}
                                            </div>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="accordion-content mb-8">
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                    </div>
                    <div className="col-right lg:w-1/2">
                        <div className="quest-img mt-8">
                            {/* <img src={faq} alt="" className="quest-img-pic" /> */}
                            <video className="videoQuestions" autoPlay loop muted playsInline>
                                <source src={videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;
