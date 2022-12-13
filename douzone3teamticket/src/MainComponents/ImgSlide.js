import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

<<<<<<< HEAD
=======
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

>>>>>>> origin/geonho
import img1 from "../image/1.jpeg";
import img2 from "../image/2.jpeg";
import img3 from "../image/3.jpeg";
import img4 from "../image/4.jpeg";
import img5 from "../image/5.jpeg";
<<<<<<< HEAD
=======
import {useNavigate} from "react-router-dom";
>>>>>>> origin/geonho


function ImgSlide() {

<<<<<<< HEAD
=======
    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    let dispatch = useDispatch();

>>>>>>> origin/geonho
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
<<<<<<< HEAD
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
=======
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 6000
>>>>>>> origin/geonho
    };

    return (
        <div>
            <Slider {...settings}>
<<<<<<< HEAD
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
=======
                <div onClick={ ()=>{
                    localStorage.setItem('performanceId', 0);
                    navigate('/musical/detail/0');
                } }>
                    <img src={'http://tkfile.yes24.com/Upload2/Display/202210/20221017/wel_mv_2022.jpg/dims/quality/70/'}/>
                </div>
                <div onClick={ ()=>{
                    localStorage.setItem('performanceId', 1);
                    navigate('/musical/detail/1');
                } }>
                    <img src={'http://tkfile.yes24.com/Upload2/Display/202212/20221208/wel_,mv_43998.jpg/dims/quality/70/'}/>
                </div>
                <div onClick={ ()=>{
                    localStorage.setItem('performanceId', 3);
                    navigate('/concert/detail/3');
                } }>
                    <img src={'http://tkfile.yes24.com/Upload2/Display/202205/20220510/wel_mv_42123_2.jpg/dims/quality/70/'}/>
>>>>>>> origin/geonho
                </div>
            </Slider>
        </div>
    );

}

export default ImgSlide;