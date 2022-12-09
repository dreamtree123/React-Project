import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

// import '../css/Category.css'
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

function Classic_album() {

    let state = useSelector((state) => state)
    // let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

    return (
        <div>
            <div className="mu">
                {
                    state.classic.map((item, i) =>
                        <div className="stuff">
                            <span className="stuff_img"><img src={state.classic[i].imageadr}></img></span>
                            <div className="stuff_content">
                                <span className="stuff_title">{state.classic[i].title}</span><br />
                                {/* <span>{state.classic[i].cast}</span><br /> */}
                                <span>{state.classic[i].showyear}-{state.classic[i].showmonth}-{state.classic[i].showday} </span><br />
                                <span>{state.classic[i].showtime}</span><br />  
                            </div>
                        </div>

                    )
                }
            </div>
        </div>

    );
}

export default Classic;