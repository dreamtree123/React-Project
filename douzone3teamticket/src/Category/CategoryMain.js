// // import styles from "./CategoryMain.module.css";

// import { useDispatch, useSelector } from "react-redux";
// import React, {  useState, useEffect } from "react"; 

// // import { EventBanner } from "../eventBanner/eventBanner";
// // import { Performance } from "./Performance";
// // import { getPerformance } from "../../service/fetcher";


// function CategoryMain() {
//   let state = useSelector((state) => state)
//   // console.log(state.concert[0].title);  

//   let dispatch = useDispatch(); //store.js로 요청 보내주는 함수

//   // let [count, setCount] = useState(0);

//   return(
//     <div>
      
//       {/* <h1>{state.concert.title}</h1> <br/> */}

//         <table class="table">
//             <thead className="tableTitle">
//                 <tr>
//                     <th scope="col">이미지</th>
//                     <th scope="col">공연명</th>
//                     <th scope="col">출연진</th>
//                     <th scope="col">상영시간</th>
//                     <th scope="col">공연일</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                 state.concert.map((item, i)=> 
//                     <tr key={{i}}>
//                         {/* <th scope="row">{state.concert[i].id}</th> */}
//                         <td><img src={state.concert[i].imageadr}></img></td>
//                         <td>{state.concert[i].title}</td>
//                         <td>{state.concert[i].cast}</td>
//                         <td>{state.concert[i].showtime}</td>
//                         <td>{state.concert[i].showyear}-{state.concert[i].showmonth}-{state.concert[i].showday} {state.concert[i].starttime}시</td>
//                         <td>
//                         </td>
//                         {/* <td> <button>초기화</button></td> */}
//                     </tr>
//                 )
//                 }
//             </tbody>
//         </table>
//     </div>
//     );

// }

// export default CategoryMain;