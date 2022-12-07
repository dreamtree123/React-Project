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