import { useDispatch, useSelector } from "react-redux";
import React, {  useState, useEffect } from "react"; 

function Classic() {
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
                state.classic.map((item, i)=> 
                    <tr key={{i}}>
                        {/* <th scope="row">{state.classic[i].id}</th> */}
                        <td><img src={state.classic[i].imageadr}></img></td>
                        <td>{state.classic[i].title}</td>
                        <td>{state.classic[i].cast}</td>
                        <td>{state.classic[i].showtime}</td>
                        <td>{state.classic[i].showyear}-{state.classic[i].showmonth}-{state.classic[i].showday} {state.classic[i].starttime}시</td>
                    </tr>
                )
                }
            </tbody>
        </table>
    </div>
    );

}

export default Classic;