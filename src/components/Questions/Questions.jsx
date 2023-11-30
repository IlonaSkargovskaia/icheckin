import React, { useState } from "react";
import faq from "../../assets/images/mac-frame.webp";
import { faqData } from "./data";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Questions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="questions my-32">
            <div className="container mx-auto w-5/6 ">
                <div className="flex gap-8 justify-between items-center">
                    <div className="col-left w-1/2">
                        <div className="questions-header flex flex-col">
                            <div className="subtitle">- FAQ</div>
                            <h2 className="title mb-12">Questions? Look here.</h2>

                            <div className="accordion pl-16">
                                {faqData.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`accordion-item acc w-5/6 mb-4 ${
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
                                            <div>
                                                {activeIndex === index ? (
                                                    <SlArrowUp className="q-icon" />
                                                ) : (
                                                    <SlArrowDown className="q-icon" />
                                                )}
                                            </div>
                                        </div>
                                        {activeIndex === index && (
                                            <div className="accordion-content w-5/6 mb-8">
                                                {item.answer}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-right w-1/2">
                        <div className="quest-img">
                            <img src={faq} alt="" className="quest-img-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Questions;
