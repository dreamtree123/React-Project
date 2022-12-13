<<<<<<< HEAD
import React, {Component} from "react";
import Slider from "react-slick";

import open1 from "../image/openImg/open1.jpg";
import open2 from "../image/openImg/open2.jpg";
import open3 from "../image/openImg/open3.jpg";
import open4 from "../image/openImg/open4.jpg";
import open5 from "../image/openImg/open5.jpg";
import open6 from "../image/openImg/open6.jpg";

export default class AsNavFor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <div className={'open'}>
                <div className={'open1'}>
                    <Slider
                        asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                    >
                        <div>
                            <img src={open1} alt={''}/>
                        </div>
                        <div>
                            <img src={open2} alt={''}/>
                        </div>
                        <div>
                            <img src={open3} alt={''}/>
                        </div>
                        <div>
                            <img src={open4} alt={''}/>
                        </div>
                        <div>
                            <img src={open5} alt={''}/>
                        </div>
                        <div>
                            <img src={open6} alt={''}/>
                        </div>
                    </Slider>
                </div>
                <div className={'open2'}>
                    <Slider
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                    >
                        <div>
                            <img src={open1} alt={''}/>
                        </div>
                        <div>
                            <img src={open2} alt={''}/>
                        </div>
                        <div>
                            <img src={open3} alt={''}/>
                        </div>
                        <div>
                            <img src={open4} alt={''}/>
                        </div>
                        <div>
                            <img src={open5} alt={''}/>
                        </div>
                        <div>
                            <img src={open6} alt={''}/>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}
=======
import React from "react";
import Slider from "react-slick";

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
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 0);
                    navigate('/theater/detail/0');
                } }>
                    <img src={state.theater[0].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 1);
                    navigate('/musical/detail/1');
                } }>
                    <img src={state.musical[1].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 2);
                    navigate('/classic/detail/2');
                } }>
                    <img src={state.classic[2].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 3);
                    navigate('/concert/detail/3');
                } }>
                    <img src={state.concert[3].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 4);
                    navigate('/theater/detail/4');
                } }>
                    <img src={state.theater[4].imageadr}/>
                </div>
                <div style={{width: 320}} onClick={ ()=>{
                    localStorage.setItem('performanceId', 5);
                    navigate('/musical/detail/5');
                } }>
                    <img src={state.musical[5].imageadr}/>
                </div>
            </Slider>
        </div>
    );
}
>>>>>>> origin/geonho
