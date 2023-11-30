import React from "react";
import { boxes } from "./boxes";

const HeroBoxes = () => {
    return (
        <div className="container mx-auto mb-32">
            <div className="flex flex-wrap gap-28 justify-center">
                {boxes.map((item, index) => {
                    const { icon, title } = item;
                    return (
                        <div className="box flex flex-col items-center " key={index}>
                            <div className="box-icon text-5xl">{icon}</div>
                            <div className="box-title ">
                                <h3 className="text-xl font-normal">{title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroBoxes;
