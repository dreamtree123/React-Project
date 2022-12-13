import { useSelector } from "react-redux";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'

import './Category.css'
import styles from "./Category.module.css";

import PerformanceSort from "./PerformanceSort";

function Musical() {
    const [visibleList, setVisibleList] = useState(true);
    const [visibleAlbum, setVisibleAlbum] = useState(false);
    return (
        <div>
         <PerformanceSort/>

        <div>
            <button className="switchBtn"
                onClick={() => { setVisibleAlbum(!visibleAlbum); setVisibleList(!visibleList); }}>
                {visibleList
                    ? <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchListImg.jpg"></img></div>
                    : <div className="switchListImg"><img src="https://raw.githubusercontent.com/sunhyung2007/team3React/01b1f300b90409ee59de5605fd510fa4c282e03c/douzone3teamticket/src/image/Category/switchAlbumImg.jpg"></img></div>}
            </button>

            {visibleList && <Musical_list />}
            {visibleAlbum && <Musical_album />}

        </div >
        </div>
    );
}

function Musical_list() {
    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
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
                    {
                        state.musical.map((item, i) => [item].filter((val) => {

                            if (search == "") {
                                return val
                            }
                            else if
                                (item.title.toLowerCase().includes(search.toLowerCase())) {
                                return val
                            }
                        }).map((val, k) =>
                            <tr key={{ i }} className={styles.categoryContent}>
                                {/* <td><img className={styles.categoryImg} src={state.musical[i].imageadr}></img></td> */}
                                <td>
                                    <span onClick={() => { localStorage.setItem('performanceId', i); naviate('/musical/detail/' + i); }}>
                                        <img className={styles.categoryImg} src={state.musical[i].imageadr}></img>
                                    </span>
                                </td>
                                <td >{state.musical[i].title}</td>
                                <td>{state.musical[i].cast}</td>
                                <td>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday}</td>
                                <td>{state.musical[i].showtime}</td>
                            </tr>

                        )
                        )
                    }

                </tbody>
            </table>
        </div>
    );

}

function Musical_album() {

    let state = useSelector((state) => state)
    let naviate = useNavigate()
    const [search, setSearch] = useState('')
    return (

        < div >
            <input type="text" placeholder="Search..." onChange={event => { setSearch(event.target.value) }} />
            <div className="mu">
                {
                    state.musical.map((item, i) => [item].filter((val) => {

                        if (search == "") {
                            return val
                        }
                        else if
                            (item.title.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((val, k) => {
                        return (
                            <div className="stuff" key={{ i }}>
                                {console.log(i)}
                                <span className="stuff_img" onClick={() => { localStorage.setItem('performanceId', i); naviate('/musical/detail/' + i); }}>
                                    <img src={state.musical[i].imageadr}></img>
                                </span>
                                <div className="stuff_content">
                                    <span className="stuff_title">{state.musical[i].title}</span><br />
                                    {/* <span>{state.musical[i].cast}</span><br /> */}
                                    <span>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday} </span><br />
                                    <span>{state.musical[i].showtime}</span><br />
                                </div>
                            </div>

                        )
                    }))
                }

            </div>
        </div>

    );
}

export default Musical;