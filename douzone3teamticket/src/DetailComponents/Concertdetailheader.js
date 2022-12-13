import { useSelector } from "react-redux";
import ConcertdetailBody from "./Concertdetailbody";

function Concertdetailheader() {

    let state = useSelector((state) => state)
    let find = state.concert[localStorage.getItem('performanceId')]
    console.log({find}); //localStorage.getItem('performanceId')해서 꺼내면 정렬후id가 아닌 정렬전id가 가져와지는 문제...

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
                        <a href='src/DetailComponents/Concertdetailheader' onClick='' className='rn-bb03'>예매하기</a>
                    </div>
                </div>
            </div>
            <ConcertdetailBody/>
        </div>
    )
}

export default Concertdetailheader;
