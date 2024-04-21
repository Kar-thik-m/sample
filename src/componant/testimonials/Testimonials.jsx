// testimonials.js

import Tmstyle from "../testimonials/Testimonials.module.css";
import { TestimonialsData } from "./Testimonials";
import { useState } from "react";

const Tmonials = () => {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0)

    const decrementIndex = () => {
        if (index === 0) {
            setIndex(TestimonialsData.length - 1);
            setWidth(100)
        } else {
            setIndex((number) => (number - 1));
            setWidth((wn) => (wn - 20))
        }
    };

    const incrementIndex = () => {
        if (index === TestimonialsData.length - 1) {
            setIndex(0);
            setWidth(0);
        } else {
            setIndex((number) => (number + 1));
            setWidth((wn) => (wn + 20))
        }
    };

    return (
        <div id="test" className={Tmstyle.wholepage}>
            <div className={Tmstyle.left}>
                <span>TESTIMONIALS</span>
                <span>
                    <h1>WHAT THEY</h1>
                </span>
                <span>
                    <h2>SAY ABOUT US</h2>
                </span>
                <div>{TestimonialsData[index].Subject}</div>
                <div>
                    <span>{TestimonialsData[index].Name} -</span>
                    <span>{TestimonialsData[index].Status}</span>
                </div>
                <div className={Tmstyle.indecbutton}>
                    <button onClick={decrementIndex}>Previous</button>
                    <button onClick={incrementIndex}>Next</button>
                </div>
                <div style={{ width: "60%" }}>
                    <div className={Tmstyle.cal} style={{ width:`${width}%` }}></div>
                </div>
            </div>
            <div className={Tmstyle.right}>
                <div className={Tmstyle.wi}></div>
                <div className={Tmstyle.mar}>
                    <img src={TestimonialsData[index].Image} alt={TestimonialsData[index].Name}></img>
                </div>
            </div>
        </div>
    );
};

export  default Tmonials;
