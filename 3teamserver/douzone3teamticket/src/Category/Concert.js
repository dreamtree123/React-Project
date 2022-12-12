import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import './Category.css'
import styles from "./Category.module.css";

function Concert() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);
    return (
        // let state = useSelector((state) => state);
        // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

        <div>
            <button className="switchBtn"
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList 
                ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div> 
                : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>}
            </button>

            {visibleList && <Concert_list />}
            {visibleAlbum && <Concert_album />}

        </div >
    );
}

function Concert_list() {
    let state = useSelector((state) => state)
    let naviate = useNavigate()

    return (
        <div>
            <table className={styles.categoryTable}>
                <thead>
                    <tr className={styles.categoryTableTitle}>
                        <th scope="col"></th>
                        <th scope="col">공연명</th>
                        <th scope="col">출연진</th>
                        <th scope="col">공연일</th>
                        <th scope="col">상영시간</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.concert.map((item, index) =>
                            <tr key={{ index }} className={styles.categoryContent}>
                                {/* <td><Link to={"/concert/detail/" + index}><img className={styles.categoryImg} src={state.concert[index].imageadr}></img></Link></td> */}
                                <td>
                                    <span onClick={ ()=>{localStorage.setItem('performanceId', index); naviate('/concert/detail/' + index);} }>
                                    <img className={styles.categoryImg} src={state.concert[index].imageadr}></img>
                                    </span>
                                </td>
                                <td>{state.concert[index].title}</td>
                                <td>{state.concert[index].cast}</td>
                                <td>{state.concert[index].showyear}-{state.concert[index].showmonth}-{state.concert[index].showday}</td>
                                <td>{state.concert[index].showtime}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

function Concert_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()

    return (
        <div>
            <div className="mu">
                {
                    state.concert.map((item, index) =>
                        <div className="stuff">
                            {/* <span className="stuff_img"><Link to={"/concert/detail/" + index}> <img src={state.concert[index].imageadr}></img></Link></span> */}
                            
                            {/* <span className="stuff_img"><img src={state.concert[index].imageadr}></img></span>
                            state.performanceId = {index};
                            naviate('/concert/detail/' + {index}); */}
                            
                            <span className="stuff_img" onClick={ ()=>{state.performanceId = index; naviate('/concert/detail/' + index);} }>
                                <img src={state.concert[index].imageadr}></img>
                            </span>
                            
                            <div className="stuff_content">
                                <span className="stuff_title">{state.concert[index].title}</span><br />
                                <span>{state.concert[index].showyear}-{state.concert[index].showmonth}-{state.concert[index].showday} </span><br />
                                <span>{state.concert[index].showtime}</span><br />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    );
}

export default Concert;