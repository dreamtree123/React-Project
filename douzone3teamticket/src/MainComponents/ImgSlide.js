import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";
import {useNavigate} from "react-router-dom";


function ImgSlide() {

    let state = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 6000
    };

    let naviate = useNavigate()

    return (
        <div>
            <Slider {...settings}>
                <div onClick={ ()=>{
                    state.categoryId = 0;
                    naviate('/datailTest');
                } }>
                    <Slide img={img1} />
                </div>

                <div onClick={ ()=>{
                    state.categoryId = 1;
                    naviate('/datailTest');
                } }>
                    <Slide img={img2}/>
                </div>

                <div onClick={ ()=>{
                    state.categoryId = 2;
                    naviate('/datailTest');
                } }>
                    <Slide img={img3}/>
                </div>

                <div onClick={ ()=>{
                    state.categoryId = 3;
                    naviate('/datailTest');
                } }>
                    <Slide img={img4}/>
                </div>

                <div onClick={ ()=>{
                    state.categoryId = 4;
                    naviate('/datailTest');
                } }>
                    <Slide img={img5}/>
                </div>
            </Slider>
        </div>
    );

}

export default ImgSlide;