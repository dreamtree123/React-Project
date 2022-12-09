import styles from "./Category.module.css";

import { useDispatch, useSelector } from "react-redux";
import React, {  useState, useEffect } from "react"; 

function Concert() {
  let state = useSelector((state) => state)

  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

  return(
    <div>

        <table className={styles.table}>
            <thead>
                <tr className={styles.tableTitle}>
                    <th scope="col">대표사진</th>
                    <th scope="col">공연명</th>
                    <th scope="col">출연진</th>
                    <th scope="col">공연일</th>
                    <th scope="col">상영시간</th>
                </tr>
            </thead>
            <tbody>
                {
                state.concert.map((item, i)=> 
                    <tr key={{i}} className={styles.categoryContent}>
                        {/* <th scope="row">{state.concert[i].id}</th> */}
                        <td><img className={styles.categoryImg} src={state.concert[i].imageadr}></img></td>
                        <td >{state.concert[i].title}</td>
                        <td>{state.concert[i].cast}</td>
                        <td>{state.concert[i].showyear}-{state.concert[i].showmonth}-{state.concert[i].showday} {state.concert[i].starttime}시</td>
                        <td>{state.concert[i].showtime}</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </div>
    );

}

export default Concert;