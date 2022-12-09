import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

// import '../css/Category.css'
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
    let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tableTitle}>
                        <th scope="col"></th>
                        <th scope="col">공연명</th>
                        <th scope="col">출연진</th>
                        <th scope="col">공연일</th>
                        <th scope="col">상영시간</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.concert.map((item, i) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                {/* <th scope="row">{state.concert[i].id}</th> */}
                                <td><img className={styles.categoryImg} src={state.concert[i].imageadr}></img></td>
                                <td >{state.concert[i].title}</td>
                                <td>{state.concert[i].cast}</td>
                                <td>{state.concert[i].showyear}-{state.concert[i].showmonth}-{state.concert[i].showday}</td>
                                <td>{state.concert[i].showtime}</td>
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
    // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

    return (
        <div>
            <div className="mu">
                {
                    state.concert.map((item, i) =>
                        <div className="stuff">
                            <span className="stuff_img"><img src={state.concert[i].imageadr}></img></span>
                            <div className="stuff_content">
                                <span className="stuff_title">{state.concert[i].title}</span><br />
                                {/* <span>{state.concert[i].cast}</span><br /> */}
                                <span>{state.concert[i].showyear}-{state.concert[i].showmonth}-{state.concert[i].showday} </span><br />
                                <span>{state.concert[i].showtime}</span><br />  
                            </div>
                        </div>

                    )
                }
            </div>
        </div>

    );
}

export default Concert;