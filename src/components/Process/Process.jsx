import React from "react";
import { process } from "./processData";

const Process = () => {
    return (
        <section className="process mb-20 " id="process">
            <div className="container w-3/4 mx-auto py-24">
                <div className="process-title text-center">
                    <h4 className="subtitle">- Process</h4>
                    <h2 className="title ">How does it work</h2>
                </div>
                <div className="process-steps flex gap-24 text-center my-8 sm:flex-wrap lg:flex-nowrap">
                    {process.map((item, index) => {
                        const { number, title, content } = item;
                        return (
                            <div className="step p-8" key={index}>
                                <div className="step-number">{number}</div>
                                <h3 className="step-title">{title}</h3>
                                <div className="step-content">{content}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
