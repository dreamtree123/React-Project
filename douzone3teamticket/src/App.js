<<<<<<< HEAD
import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";
import Classic from "./DetailComponents/Classicdetailheader";
import Theater from "./DetailComponents/Theaterdetailheader";
import Concert from "./DetailComponents/Concertdetailheader";
import Musical from "./DetailComponents/Musicaldetailheader";

import './App.css';

function App() {
=======
import './App.css';
import {Route, Routes} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import MainNav from "./MainComponents/MainNav";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

import Login from "./UserComponents/Login";
import Join from "./UserComponents/Join";
import Pay from "./UserComponents/Pay";
import Success from "./UserComponents/Success";
import Mypage from "./UserComponents/Mypage";
import Basket from "./BasketComponents/Basket";

import Concert from "./Category/Concert";
import Musical from "./Category/Musical";
import Theater from "./Category/Theater";
import Classic from "./Category/Classic";

import Concertdetailheader from "./DetailComponents/Concertdetailheader";
import Musicaldetailheader from "./DetailComponents/Musicaldetailheader";
import Theaterdetailheader from "./DetailComponents/Theaterdetailheader";
import Classicdetailheader from "./DetailComponents/Classicdetailheader";

function App() {

    let state = useSelector((state) => state)

>>>>>>> origin/geonho
    return (
        <div className="App">
            <MainNav></MainNav>

<<<<<<< HEAD
            {/* <ImgSlide></ImgSlide> */}
            <div className={'Mainbody'}>
                {/* <MainBody></MainBody> */}
                <Classic></Classic>
=======
            <Routes>
                <Route path='/' element={<MainBody></MainBody>} />
                {/* <Route path='/' element={<Concertdetailheader></Concertdetailheader>}/> */}
                <Route path='/concert' element={<Concert/>}/>
                <Route path='/musical' element={<Musical/>} />
                <Route path='/theater' element={<Theater/>}/>
                <Route path='/classic' element={<Classic/>}/>
            
                {/* {
                    state.concert.map((item, i) =>
                      <Route path={'/concert/detail/' + {i}} element={<Concertdetailheader></Concertdetailheader>}/>
                    )
                }   */}

                <Route path='/concert/detail/:find' element={<Concertdetailheader></Concertdetailheader>}/>
                <Route path='/musical/detail/:find' element={<Musicaldetailheader></Musicaldetailheader>}/>
                <Route path='/theater/detail/:find' element={<Theaterdetailheader></Theaterdetailheader>}/>
                <Route path='/classic/detail/:find' element={<Classicdetailheader></Classicdetailheader>}/>

                <Route path='/' element={<MainBody></MainBody>}/>

                <Route path={'/user'}>
                    <Route path='login' element={<Login></Login>}/>
                    <Route path='join' element={<Join></Join>}/>
                </Route>

                <Route path='/mypage' element={<Mypage></Mypage>}></Route>

                <Route path='/pay' element={<Pay></Pay>}/>
                <Route path='/success' element={<Success></Success>}/>

                <Route path='/basket' element={<Basket></Basket>}/>

            </Routes>

            {/* <ImgSlide></ImgSlide> */}
            <div className={'Mainbody'}>
                {/* <MainBody></MainBody> */}
>>>>>>> origin/geonho
                
            </div>

            <Footer></Footer>
        </div>
    );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/geonho
