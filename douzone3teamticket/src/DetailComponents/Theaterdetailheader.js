<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import theater from "../store";

function Theater() {

    let state = useSelector((state) => state)

    return (
        <div>
            {
                state.theater.map((a, i) =>
                    <div key={i}>
                        <div className="renew-wrap">
                            <div className="renew-content">

                                <div className="rn-02">
                                    <p className="rn-big-title">{state.theater[i].title}</p>
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
                                            <img src={state.theater[i].imageadr} />
                                        </div>
                                    </div>
                                    <div className="rn-03-right">
                                        <div className="rn-product-area1">
                                            <dl>
                                                <dt>등급</dt>
                                                <dd>&nbsp;{state.theater[i].rate}</dd>
                                                <dt>관람시간</dt>
                                                <dd>&nbsp;{state.theater[i].showtime}</dd>
                                                <dt>출연</dt>
                                                <dd>&nbsp;<a className='rn-product-peole'>{state.theater[i].cast}</a></dd>
                                                <dt id="dtPrice">가격</dt>
                                                <dd id="divPrice" className="rn-product-price">
                                                    <ul className="rn-product-price1">
                                                        <li>VIP석 <span className='rn-red'>{state.theater[i].priceVIP}</span>원</li>
                                                        <li>SR석 <span className='rn-red'>{state.theater[i].priceSR}</span>원</li>
                                                        <li>R석 <span className='rn-red'>{state.theater[i].priceR}</span>원</li>
                                                        <li>S석 <span className='rn-red'>{state.theater[i].priceS}</span>원</li>
                                                    </ul>
                                                </dd>
                                                <dd className="rn-product-dc"></dd>
                                            </dl>
                                        </div>

                                        <div className="rn-product-area3">
                                            <dl>
                                                <dt>공연시간 안내</dt>
                                                <dd>{state.theater[i].showyear}년 {state.theater[i].showmonth}월 2{state.theater[i].showday}일 오후 {state.theater[i].showtime}시</dd>
                                                <dt id="deliveryTitle">배송정보</dt>
                                                <dd>{state.theater[i].delivery}</dd>
                                            </dl>
                                        </div>

                                    </div>
                                </div>

                                <div className="rn-05">
                                    <a href='' onClick='' className='rn-bb03'>예매하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

=======
import { useSelector } from "react-redux";
import TheaterdetailBody from "./Theaterdetailbody";

function Theaterdetailheader() {

    let state = useSelector((state) => state)

    let find = state.theater[localStorage.getItem('performanceId')]

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
                        <a href='src/DetailComponents/Theaterdetailheader' onClick='' className='rn-bb03'>예매하기</a>
                    </div>
                </div>
            </div>
            <TheaterdetailBody/>
>>>>>>> origin/geonho
        </div>
    )
}

<<<<<<< HEAD
export default Theater;
=======
export default Theaterdetailheader;
>>>>>>> origin/geonho
