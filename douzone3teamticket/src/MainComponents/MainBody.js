import React from "react";
import Slider from "react-slick";
import '../css/Main.css'

import '../slick';
import '../css/slick.css'

import imgh1 from "../image/hotImg/h1.jpg";
import imgh2 from "../image/hotImg/h2.jpg";
import imgh3 from "../image/hotImg/h3.jpg";
import imgh4 from "../image/hotImg/h4.jpg";
import imgh5 from "../image/hotImg/h5.jpg";
import imgh6 from "../image/hotImg/h6.jpg";
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
                                    <div>
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

            </div>
        </div>
    );
}

export default MainBody;