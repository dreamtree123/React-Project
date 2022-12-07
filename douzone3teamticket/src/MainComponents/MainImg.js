import React, {useState, useEffect, useRef} from "react";
import Slide from "./Slide";

import '../css/Main.css'

import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";

function MainImg() {
    const TOTAL_SLIDES = 4;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);
    return (
        <div className={'Container'}>
            <div ref={slideRef}>
                <Slide img={img1}/>
                <Slide img={img2}/>
                <Slide img={img3}/>
                <Slide img={img4}/>
                <Slide img={img5}/>
            </div>
            <button onClick={prevSlide}>Previous Slide</button>
            <button onClick={nextSlide}>Next Slide</button>
        </div>
    );

}


export default MainImg;