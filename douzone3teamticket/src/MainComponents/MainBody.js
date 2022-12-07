import React from "react";
import Slider from "react-slick";
import '../css/Main.css'

import '../slick';
import '../css/slick.css'

import AsNavFor from './Ticketopen'
import DismissibleExample from './Ask'

import {useState} from "react";

function MainBody() {

    let [title, setTitle] = useState(["1", "2", "3", "4", "5", "6"]);

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
            <div>
                <h1>WHAT'S HOT</h1>
                <br/>
                <div className={'hotImg'}>
                    <Slider {...settings}>
                        {
                            title.map(function (a) {
                                return (
                                    <div style={{width: 320}}>
                                        <img src={require('../image/hotImg/h' + a + '.jpg')}/>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>

            <div className={'ticketopen'}>
                <h1>TICKET OPEN</h1>
                <AsNavFor></AsNavFor>
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