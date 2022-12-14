import { useSelector } from "react-redux";
import React, { useState } from "react";
import { createPath, Link, useNavigate } from 'react-router-dom'

import './Category.css'
import styles from "./Category.module.css";

function Classic() {
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

            {visibleList && <Classic_list />}
            {visibleAlbum && <Classic_album />}

        </div >
    );
}

function Classic_list() {
    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')

    let data = [];
    let temp = [];

    state.concert.map((data1) => {
        temp.push(data1)
    })

    data.push(temp)
    temp = [];

    state.musical.map((data2) => {
        temp.push(data2)
    })

    data.push(temp);
    temp = [];


    state.classic.map((data3) => {
        temp.push(data3)
    })

    data.push(temp)
    temp = [];

    state.theater.map((data4) => {
        temp.push(data4)
    })

    data.push(temp)
    temp = [];

    // console.log(data)
    //titel 비교z를 위한 배열

    return (
        <div>
            <input type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
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


                </tbody>
            </table>
        </div >
    );

}

function Classic_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
    let arr = [];
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <div className="mu">


            </div>
        </div>

    );
}

export default Classic;