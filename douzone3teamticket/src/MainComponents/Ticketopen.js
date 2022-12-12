import React from "react";
import Slider from "react-slick";

import open1 from "../image/openImg/open1.jpg";
import open2 from "../image/openImg/open2.jpg";
import open3 from "../image/openImg/open3.jpg";
import open4 from "../image/openImg/open4.jpg";
import open5 from "../image/openImg/open5.jpg";
import open6 from "../image/openImg/open6.jpg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import '../store'

import '../css/etcCss.css'

export default function CenterMode() {

    let navigate = useNavigate();
    let state = useSelector( (state) => { return state });

    const settings = {
        // dots: true,
        // dotsClass: "slick-dots slick-thumb",
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 3000
    };
    return (
        <div className={"upload"}>
            <Slider {...settings}>
                <div onClick={ ()=>{
                    state.categoryId = 0;
                    navigate('/datailTest');
                } }>
                    <img src={open1}/>
                </div>
                <div onClick={ ()=>{
                    state.categoryId = 1;
                    navigate('/datailTest');
                } }>
                    <img src={open2}/>
                </div>
                <div onClick={ ()=>{
                    state.categoryId = 2;
                    navigate('/datailTest');
                } }>
                    <img src={open3}/>
                </div>
                <div onClick={ ()=>{
                    state.categoryId = 3;
                    navigate('/datailTest');
                } }>
                    <img src={open4}/>
                </div>
                <div onClick={ ()=>{
                    state.categoryId = 4;
                    navigate('/datailTest');
                } }>
                    <img src={open5}/>
                </div>
                <div onClick={ ()=>{
                    state.categoryId = 5;
                    navigate('/datailTest');
                } }>
                    <img src={open6}/>
                </div>
            </Slider>
        </div>
    );
}
