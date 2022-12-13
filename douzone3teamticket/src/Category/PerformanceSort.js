import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { sortPerformance } from "../store";

import styles from "./Category.module.css";

function PerformanceSort() {
    let state = useSelector((state) => state)
    let dispatch = useDispatch(); //Store.js로 요청 보내주는 함수

    //첫 렌더링 후 한번 실행, 그 후에는 []<-안의 값이 없데이트 될 때만 실행
    useEffect( () => { 
        console.log(state.concert);
        // state.concert.priceS = state;
        // Concert_list(state);
    },[state])

    return (
        <div className={styles.sort_performance}> 
                <p onClick={ () => 
                    {dispatch(sortPerformance("sortHighPrice"));
                    // state.performanceId.sort();
                    }
                }>높은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortPerformance("sortLowPrice"))}
                }>낮은 금액순 |</p> &nbsp;&nbsp;&nbsp;

                <p onClick={ () => 
                    {dispatch(sortPerformance("sortTitle"))}
                }>공연 이름순</p>
        </div>
    )

}

export default PerformanceSort;