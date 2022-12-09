import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

// import '../css/Category.css'
import './Category.css'
import styles from "./Category.module.css";

function Musical() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);
    return (
        // let state = useSelector((state) => state);
        // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

        <div>
            {/* <button onClick={() => { <Musical_album /> }}>앨범</button>
            {/* <button onClick={() => { <Musical_list /> }}>리스트</button> */}

            <button className="switchBtn"
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList 
                ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div> 
                : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>}
            </button>

            {visibleList && <Musical_list />}
            {visibleAlbum && <Musical_album />}

        </div >
    );
}

// let Musical_list = function Musical_list() {
function Musical_list() {
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
                        state.musical.map((item, i) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                {/* <th scope="row">{state.musical[i].id}</th> */}
                                <td><img className={styles.categoryImg} src={state.musical[i].imageadr}></img></td>
                                <td >{state.musical[i].title}</td>
                                <td>{state.musical[i].cast}</td>
                                <td>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday}</td>
                                <td>{state.musical[i].showtime}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

// let Musical_album = function Musical_album() {
function Musical_album() {

    let state = useSelector((state) => state)
    // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

    return (
        <div>
            <div className="mu">
                {/* <table className="table">
                    <tbody> */}
                {
                    state.musical.map((item, i) =>
                        <div className="stuff">
                            <span className="stuff_img"><img src={state.musical[i].imageadr}></img></span>
                            <div className="stuff_content">
                                <span className="stuff_title">{state.musical[i].title}</span><br />
                                {/* <span>{state.musical[i].cast}</span><br /> */}
                                <span>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday} </span><br />
                                <span>{state.musical[i].showtime}</span><br />  
                            </div>
                        </div>

                    )
                }
                {/* </tbody>
                </table> */}
            </div>
        </div>

    );
}

export default Musical;