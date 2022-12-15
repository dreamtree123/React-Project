import { useSelector } from "react-redux";
import TheaterdetailBody from "./Theaterdetailbody";
import {useNavigate} from "react-router-dom";
import 'react-calendar/dist/Calendar.css'; // css import
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState} from "react";
import { ko } from "date-fns/esm/locale";
import '../css/Detailheader.css'
import moment from "moment";
import 'react-calendar/dist/Calendar.css'; // css import

function Theaterdetailheader() {

    let state = useSelector((state) => state)

    let find = state.theater[localStorage.getItem('performanceId')]

    let navigate = useNavigate();

    return (
        <div>
            <div className="renew-wrap">
                <div className="renew-content">

                    <div className="rn-02">
                        <p className="rn-big-title">{find.title}</p>
                    </div>
                </div>
            </div>
            <div className="movie-pop-wrap">
            </div>
            <div className="renew-wrap rw2">
                <div className="renew-content">
                    <div className="rn-03">
                        <div className="rn-03-left">
                            <div className="rn-product-imgbox">
                                <img src={find.imageadr} />
                            </div>
                        </div>
                        <div className="rn-03-right">
                            <div className="rn-product-area1">
                                <dl>
                                    <dt>등급</dt>
                                    <dd>&nbsp;{find.rate}</dd>
                                    <dt>관람시간</dt>
                                    <dd>&nbsp;{find.showtime}</dd>
                                    <dt>출연</dt>
                                    <dd>&nbsp;<a className='rn-product-peole'>{find.cast}</a></dd>
                                    <dt id="dtPrice">가격</dt>
                                    <dd id="divPrice" className="rn-product-price">
                                        <ul className="rn-product-price1">
                                            <li>VIP석 <span className='rn-red'>{find.priceVIP}</span>원</li>
                                            <li>SR석 <span className='rn-red'>{find.priceSR}</span>원</li>
                                            <li>R석 <span className='rn-red'>{find.priceR}</span>원</li>
                                            <li>S석 <span className='rn-red'>{find.priceS}</span>원</li>
                                        </ul>
                                    </dd>
                                    <dd className="rn-product-dc"></dd>
                                </dl>
                            </div>

                            <div className="rn-product-area3">
                                <dl>
                                    <dt>공연시간 안내</dt>
                                    <dd>{find.showyear}년 {find.showmonth}월 {find.showday}일 오후 {find.starttime}시</dd>
                                    <dt id="deliveryTitle">배송정보</dt>
                                    <dd>{find.delivery}</dd>
                                </dl>
                            </div>

                        </div>
                    </div>
                    <div className="rn-05">
                        <div className="calender2-1">
                            
                                <a className="calender3-1">날짜 선택 및 일정</a>
                            
                            <div className="calender3-2">
                                <Calender />
                                <div className="calender4-2">

                                </div>
                            </div>
                        </div>
                        <div className="calender2-2">
                            <div className="calender3-3">

                            </div>
                            <div className="caleder3-4">

                            </div>
                        </div>
                        <a onClick={ () => {
                            if (localStorage.getItem('userId') == ''){
                                alert('로그인 필요');
                                navigate('/user/login');
                            }else{
                                state.gocategory = 'Theater';
                                navigate('/seat');
                            }
                        } } className='rn-bb03'>예매하기</a>
                    </div>
                    <TheaterdetailBody/>
                </div>
            </div>
            
        </div>
    )
}

export default Theaterdetailheader;

function Calender() {
    let state = useSelector((state) => state);
    const [startDate, setStartDate] = useState(null);
    let showdate = state.theater[localStorage.getItem('performanceId')].showdate
    let showtime = state.theater[localStorage.getItem('performanceId')].starttime
    let vip = state.theater[localStorage.getItem('performanceId')].vipticket
    let sr = state.theater[localStorage.getItem('performanceId')].srticket
    let r = state.theater[localStorage.getItem('performanceId')].rticket
    let s = state.theater[localStorage.getItem('performanceId')].sticket
    console.log(moment(startDate).format("YYYY-MM-DD"));
    return (
        <div>
            <DatePicker
            locale={ko}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            includeDates={[new Date(), new Date(showdate)]}
            inline
            />
            <p className="calender3-1">
                * {moment(startDate).format("YYYY년 MM월 DD일")}의 예매 가능 일정 *
                {
                    moment(startDate).format("YYYY-MM-DD") === showdate ?
                    <p className="calender3-1-1">
                        <br />
                        {showtime}시에 공연 예정입니다.
                        <br />
                        <br />
                         #남은 좌석 수 : VIP 좌석 {vip}, SR 좌석 {sr}, R 좌석 {r}, S 좌석 {s}
                    </p>
                    
                    : <p className="calender3-1-1">
                        일정이 없습니다.
                    </p>
                }
            </p>
            
        </div>
    );
  };