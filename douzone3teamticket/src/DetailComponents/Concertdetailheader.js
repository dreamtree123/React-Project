import { useDispatch, useSelector } from "react-redux";
import concert from "../store";

function Concert() {

    let state = useSelector((state) => state)

    return (
        <div>
            {
                state.concert.map((a, i) =>
                    <div key={i}>
                        <div className="renew-wrap">
                            <div className="renew-content">

                                <div className="rn-02">
                                    <p className="rn-big-title">{state.concert[i].title}</p>
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
                                            <img src={state.concert[i].imageadr} />
                                        </div>
                                    </div>
                                    <div className="rn-03-right">
                                        <div className="rn-product-area1">
                                            <dl>
                                                <dt>등급</dt>
                                                <dd>&nbsp;{state.concert[i].rate}</dd>
                                                <dt>관람시간</dt>
                                                <dd>&nbsp;{state.concert[i].showtime}</dd>
                                                <dt>출연</dt>
                                                <dd>&nbsp;<a className='rn-product-peole'>{state.concert[i].cast}</a></dd>
                                                <dt id="dtPrice">가격</dt>
                                                <dd id="divPrice" className="rn-product-price">
                                                    <ul className="rn-product-price1">
                                                        <li>VIP석 <span className='rn-red'>{state.concert[i].priceVIP}</span>원</li>
                                                        <li>SR석 <span className='rn-red'>{state.concert[i].priceSR}</span>원</li>
                                                        <li>R석 <span className='rn-red'>{state.concert[i].priceR}</span>원</li>
                                                        <li>S석 <span className='rn-red'>{state.concert[i].priceS}</span>원</li>
                                                    </ul>
                                                </dd>
                                                <dd className="rn-product-dc"></dd>
                                            </dl>
                                        </div>

                                        <div className="rn-product-area3">
                                            <dl>
                                                <dt>공연시간 안내</dt>
                                                <dd>{state.concert[i].showyear}년 {state.concert[i].showmonth}월 2{state.concert[i].showday}일 오후 {state.concert[i].showtime}시</dd>
                                                <dt id="deliveryTitle">배송정보</dt>
                                                <dd>{state.concert[i].delivery}</dd>
                                            </dl>
                                        </div>

                                    </div>
                                </div>

                                <div className="rn-05">
                                    <a href='src/DetailComponents/Concertdetailheader' onClick='' className='rn-bb03'>예매하기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Concert;