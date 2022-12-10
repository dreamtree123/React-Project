import { useDispatch, useSelector } from "react-redux";
import classic from "../store";

function Classic() {

    let state = useSelector((state) => state)

    return (
        <div>
            {
                state.classic.map((a, i) =>
                    <div key={i}>
                        <div className="renew-wrap">
                            <div className="renew-content">

                                <div className="rn-02">
                                    <p className="rn-big-title">{state.classic[i].title}</p>
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
                                            <img src={state.classic[i].imageadr} />
                                        </div>
                                    </div>
                                    <div className="rn-03-right">
                                        <div className="rn-product-area1">
                                            <dl>
                                                <dt>등급</dt>
                                                <dd>&nbsp;{state.classic[i].rate}</dd>
                                                <dt>관람시간</dt>
                                                <dd>&nbsp;{state.classic[i].showtime}</dd>
                                                <dt>출연</dt>
                                                <dd>&nbsp;<a className='rn-product-peole'>{state.classic[i].cast}</a></dd>
                                                <dt id="dtPrice">가격</dt>
                                                <dd id="divPrice" className="rn-product-price">
                                                    <ul className="rn-product-price1">
                                                        <li>VIP석 <span className='rn-red'>{state.classic[i].priceVIP}</span>원</li>
                                                        <li>SR석 <span className='rn-red'>{state.classic[i].priceSR}</span>원</li>
                                                        <li>R석 <span className='rn-red'>{state.classic[i].priceR}</span>원</li>
                                                        <li>S석 <span className='rn-red'>{state.classic[i].priceS}</span>원</li>
                                                    </ul>
                                                </dd>
                                                <dd className="rn-product-dc"></dd>
                                            </dl>
                                        </div>

                                        <div className="rn-product-area3">
                                            <dl>
                                                <dt>공연시간 안내</dt>
                                                <dd>{state.classic[i].showyear}년 {state.classic[i].showmonth}월 2{state.classic[i].showday}일 오후 {state.classic[i].showtime}시</dd>
                                                <dt id="deliveryTitle">배송정보</dt>
                                                <dd>{state.classic[i].delivery}</dd>
                                            </dl>
                                        </div>

                                    </div>
                                </div>

                                <div className="rn-05">
                                    <a href='src/DetailComponents/Classicdetailheader' onClick='' className='rn-bb03'>예매하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Classic;