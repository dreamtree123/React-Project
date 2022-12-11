import React from "react";
import Slider from "react-slick";
import '../css/Main.css'
import AsNavFor from './Ticketopen'
import DismissibleExample from './Ask'
import ImgSlide from "../MainComponents/ImgSlide";

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import CenterMode from "./Ticketopen";
import {useNavigate} from "react-router-dom";

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
            <div className="cont">
                <div className="con-left">
                    <p className="tell"><img src="http://tkfile.yes24.com/imgNew/main/tell.png" alt=""/></p>
                    <dl>
                        <dt>평일</dt>
                        <dd>09:00~18:00</dd>
                        <dt>토요일</dt>
                        <dd>09:00~17:00<span>(일요일 및 공휴일 휴무)</span></dd>
                    </dl>
                </div>
                <div className={'v-line'}></div>

                <div className="con-center">
                    <a href="/New/Notice/NoticeMain.aspx?Gcode=009_215" target="_blank"
                       className="cca1">공지사항</a>
                    <a href="/UserGuide/Guide?Gcode=009_215" target="_blank" className="cca2">이용안내</a>
                    <a href="/UserGuide/FAQ" target="_blank" className="cca3">FAQ</a>
                    <a href="/UserGuide/inquiry" target="_blank" className="cca4">티켓판매안내</a>
                </div>

                <div className={'v-line'}></div>

                <div className="con-right">
                    <div className={'socialappdown'}>
                        <div className="social">
                            <a href="https://www.facebook.com/YES24Play" className="soc1"><img
                                src="http://tkfile.yes24.com/imgNew/main/social1.png" alt=""/></a>
                            <a href="https://www.instagram.com/yes24ticket" className="soc2"/><img
                            src="http://tkfile.yes24.com/imgNew/main/social2.png" alt=""/>
                            <a href="https://pf.kakao.com/_vRvxcV" className="soc3"><img
                                src="http://tkfile.yes24.com/imgNew/main/social3.png" alt=""/></a>
                        </div>

                        <div className="appdown">
                            <a href="https://play.google.com/store/apps/details?id=com.yes24.ticket"><img
                                src="http://tkfile.yes24.com/imgNew/main/appdown1.png" alt=""/></a>
                            <a href="https://itunes.apple.com/kr/app/yeseu24-gong-yeon-yemae/id937042887?l=en&amp;mt=8"><img
                                src="http://tkfile.yes24.com/imgNew/main/appdown2.png" alt=""/></a>
                        </div>
                    </div>
                    <a href="https://www.culture.go.kr/deduction/main.do" className="deduction" target="_blank"><img
                        src="http://tkfile.yes24.com/imgNew/main/deduction.png" alt=""/></a>
                </div>
            </div>

        </div>
    );
}

export default MainBody;