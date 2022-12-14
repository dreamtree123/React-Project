import React from "react";
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import '../css/CategoryImgSlide.css'

const ConcertSlide = () => {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-70px",
        slidesToShow: 4,
        speed: 900,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 1000
    };

    return (
            <div>
                <div className={'divtitle'}>HOT</div>
                <br/>
                <div className={'hotImg'}>
                    <Slider {...settings}>

                        <div style={{width: 320}} onClick={ ()=>{
                            localStorage.setItem('performanceId', 0);
                            navigate('/concert/detail/0');
                        } }>
                            <img src={state.concert[0].imageadr}/>
                        </div>

                        {/* <div style={{width: 320}} onClick={ ()=>{ */}
                        <div className={'photo'} onClick={ ()=>{
                            localStorage.setItem('performanceId', 1);
                            navigate('/concert/detail/1');
                        } }>
                            <img src={state.concert[1].imageadr}/>
                        </div>

                        {/* <div style={{width: 320}} onClick={ ()=>{ */}
                        <div className={'photo'} onClick={ ()=>{
                            localStorage.setItem('performanceId', 2);
                            navigate('/concert/detail/2');
                        } }>
                            <img src={state.concert[2].imageadr}/>
                        </div>

                        {/* <div style={{width: 320}} onClick={ ()=>{ */}
                        <div className={'photo'} onClick={ ()=>{
                            localStorage.setItem('performanceId', 3);
                            navigate('/concert/detail/3');
                        } }>
                            <img src={state.concert[3].imageadr}/>
                        </div>

                        {/* <div style={{width: 320}} onClick={ ()=>{ */}
                        <div className={'photo'} onClick={ ()=>{
                            localStorage.setItem('performanceId', 4);
                            navigate('/concert/detail/4');
                        } }>
                            <img src={state.concert[4].imageadr}/>
                        </div>

                        {/* <div style={{width: 320}} onClick={ ()=>{ */}
                        <div className={'photo'} onClick={ ()=>{
                            localStorage.setItem('performanceId', 5);
                            navigate('/concert/detail/5');
                        } }>
                            <img src={state.concert[5].imageadr}/>
                        </div>
                        
                    </Slider>
                </div>
            </div>
    );
}

export {ConcertSlide};