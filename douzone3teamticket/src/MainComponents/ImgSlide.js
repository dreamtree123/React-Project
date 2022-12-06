import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";


function ImgSlide() {

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Slide img={img1}/>
                </div>
                <div>
                    <Slide img={img2}/>
                </div>
                <div>
                    <Slide img={img3}/>
                </div>
                <div>
                    <Slide img={img4}/>
                </div>
                <div>
                    <Slide img={img5}/>
                </div>
            </Slider>
        </div>
    );

}

export default ImgSlide;