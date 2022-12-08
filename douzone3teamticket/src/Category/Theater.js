import { useDispatch, useSelector } from "react-redux";
import React, {  useState, useEffect } from "react"; 

function Theater() {
  let state = useSelector((state) => state)

  let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

  return(
    <div>

        <table class="table">
            <thead className="tableTitle">
                <tr>
                    <th scope="col">이미지</th>
                    <th scope="col">공연명</th>
                    <th scope="col">출연진</th>
                    <th scope="col">상영시간</th>
                    <th scope="col">공연일</th>
                </tr>
            </thead>
            <tbody>
                {
                state.theater.map((item, i)=> 
                    <tr key={{i}}>
                        {/* <th scope="row">{state.theater[i].id}</th> */}
                        <td><img src={state.theater[i].imageadr}></img></td>
                        <td>{state.theater[i].title}</td>
                        <td>{state.theater[i].cast}</td>
                        <td>{state.theater[i].showtime}</td>
                        <td>{state.theater[i].showyear}-{state.theater[i].showmonth}-{state.theater[i].showday} {state.theater[i].starttime}시</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </div>
    );

}

export default Theater;