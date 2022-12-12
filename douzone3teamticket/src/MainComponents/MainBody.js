import React from "react";
import Slider from "react-slick";

import AsNavFor from './Ticketopen'
import DismissibleExample from './Ask'
import ImgSlide from "../MainComponents/ImgSlide";
import VarietyInfo from "./varietyInfo";

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CenterMode from "./Ticketopen";
import {useNavigate} from "react-router-dom";

import '../css/Main.css'

function MainBody() {

    let state = useSelector((state) => {
        return state;
    });

    let dispatch = useDispatch();

    let navigate = useNavigate();

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-70px",
        slidesToShow: 4,
        speed: 700,
        variableWidth: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className={'bodyStart'} {...settings}>

            {/* ///////////////////////////// */}

            <div className={'Mainbody'}>
                <ImgSlide></ImgSlide>
            </div>

            {/* ///////////////////////////// */}

            <div>
                <h1>WHAT'S HOT</h1>
                <br/>
                <div className={'hotImg'}>
                    <Slider {...settings}>
                        <div style={{width: 320}} onClick={ ()=>{
                            state.categoryId = 0;
                            navigate('/datailTest');
                        } }>
                            <img src={require('../image/hotImg/h1.jpg')}/>
                        </div>
                        <div style={{width: 320}} onClick={ ()=>{
                            state.categoryId = 1;
                            navigate('/datailTest');
                        } }>
                            <img src={require('../image/hotImg/h2.jpg')}/>
                        </div>
                        <div style={{width: 320}} onClick={ ()=>{
                            state.categoryId = 2;
                            navigate('/datailTest');
                        } }>
                            <img src={require('../image/hotImg/h3.jpg')}/>
                        </div>
                        <div style={{width: 320}} onClick={ ()=>{
                            state.categoryId = 3;
                            navigate('/datailTest');
                        } }>
                            <img src={require('../image/hotImg/h4.jpg')}/>
                        </div>
                        <div style={{width: 320}} onClick={ ()=>{
                            state.categoryId = 4;
                            navigate('/datailTest');
                        } }>
                            <img src={require('../image/hotImg/h5.jpg')}/>
                        </div>
                        <div style={{width: 320}} onClick={ ()=>{
                            state.categoryId = 5;
                            navigate('/datailTest');
                        } }>
                            <img src={require('../image/hotImg/h6.jpg')}/>
                        </div>
                    </Slider>
                </div>
            </div>

            {/* ///////////////////////////// */}

            {/* 티켓 오픈 */}
            <div className={'ticketopen'}>
                <h1>TICKET OPEN</h1>
                <CenterMode></CenterMode>
            </div>


            {/* 각종 정보 */}
            <VarietyInfo></VarietyInfo>

        </div>
    );
}

export default MainBody;