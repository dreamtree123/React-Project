import styles from "./Category.module.css";
// import './Category.module.css';

import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function Classic() {
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
                        state.classic.map((item, i) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                {/* <th scope="row">{state.classic[i].id}</th> */}
                                <td><img className={styles.categoryImg} src={state.classic[i].imageadr}></img></td>
                                {/* <div className={styles.showContent}> */}
                                <td className={styles.showContent}>{state.classic[i].title}</td>
                                <td className={styles.showContent}>{state.classic[i].cast}</td>
                                <td className={styles.showContent}>{state.classic[i].showyear}-{state.classic[i].showmonth}-{state.classic[i].showday}</td>
                                <td className={styles.showContent}>{state.classic[i].showtime}</td>
                                {/* </div> */}
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Classic;