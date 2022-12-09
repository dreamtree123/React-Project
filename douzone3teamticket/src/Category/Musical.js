import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../css/Musical.css'

function Musical() {

    let state = useSelector((state) => state)

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
                                <span>{state.musical[i].showyear}-{state.musical[i].showmonth}-{state.musical[i].showday} {state.musical[i].starttime}시</span><br />
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