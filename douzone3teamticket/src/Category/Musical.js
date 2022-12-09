import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../css/Musical.css'
import styles from "./Category.module.css";


function Musical() {
    const [visible, setVisible] = useState(false);
    const [show, setshow] = useState(false);
    return (
        // let state = useSelector((state) => state);
        // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

        <div>
            <button onClick={() => { setVisible(!visible); }}>
                {visible ? "앨범 숨기기" : "앨범 보이기"}</button>
            <button onClick={() => Musical_list()}>리스트</button>
            {/* <button onClick={() => { <Musical_album /> }}>앨범</button>
            {/* <button onClick={() => { <Musical_list /> }}>리스트</button> */}

            {visible && <Musical_list />}
            {/* {<Musical_album />} */}

            {/* <img
                className={styles.list}
                src="/images/icon-list-line.svg"
                alt="list"
                onClick={() => concert_list("list")}
            />

            <img
                className={styles.album}
                src="/images/icon-album-line.svg"
                alt="album"
                onClick={() => concert_album("list")}
            /> */}
        </div >
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
                        // <tr key={{ i }}>
                        //     {/* <th scope="row">{state.concert[i].id}</th> */}
                        //     <td><img src={state.musical[i].imageadr}></img></td>
                        //     {/* <td>{state.musical[i].title}</td>
                        //     <td>{state.musical[i].cast}</td>
                        //     <td>{state.musical[i].showtime}</td>
                        //     <td>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday} {state.musical[i].starttime}시</td> */}
                        // </tr>
                        <div className="stuff">
                            <span className="stuff_img"><img src={state.musical[i].imageadr}></img></span>
                            <div className="musicial_name">
                                <span>{state.musical[i].title}</span><br />
                                <span>{state.musical[i].cast}</span><br />
                                <span>{state.musical[i].showtime}</span><br />
                                <span>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday} </span><br />
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

// export default Musical;

// let Musical_list = function Musical_list() {
function Musical_list() {
    // let type1=()=>{
    let state = useSelector((state) => state)
    // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

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

export default Musical;