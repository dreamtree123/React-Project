import './App.css';
import {Route, Routes} from "react-router-dom";

import MainNav from "./MainComponents/MainNav";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

import Login from "./UserComponents/Login";
import Join from "./UserComponents/Join";
import Pay from "./UserComponents/Pay";
import Success from "./UserComponents/Success";
import Mypage from "./UserComponents/Mypage";

import DetailTest from "./DetailComponents/DetailTest";

import Concert from "./Category/Concert";
import Musical from "./Category/Musical";
import Theater from "./Category/Theater";
import Classic from "./Category/Classic";

import Concertdetailheader from "./DetailComponents/Concertdetailheader";
import Musicaldetailheader from "./DetailComponents/Musicaldetailheader";
import Theaterdetailheader from "./DetailComponents/Theaterdetailheader";
import Classicdetailheader from "./DetailComponents/Classicdetailheader";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>

            <Routes>
                <Route path='/' element={<MainBody></MainBody>} />
                {/* <Route path='/' element={<Concertdetailheader></Concertdetailheader>}/> */}
                <Route path='/concert' element={<Concert/>}/>
                <Route path='/musical' element={<Musical/>} />
                <Route path='/theater' element={<Theater/>}/>
                <Route path='/classic' element={<Classic/>}/>

                <Route path='/concert/detail/' element={<Concertdetailheader></Concertdetailheader>}/>
                <Route path='/musical/detail/' element={<Musicaldetailheader></Musicaldetailheader>}/>
                <Route path='/theater/detail/' element={<Theaterdetailheader></Theaterdetailheader>}/>
                <Route path='/classic/detail/' element={<Classicdetailheader></Classicdetailheader>}/>

                <Route path='/' element={<MainBody></MainBody>}/>

                <Route path={'/user'}>
                    <Route path='login' element={<Login></Login>}/>
                    <Route path='join' element={<Join></Join>}/>
                </Route>

                <Route path='/mypage' element={<Mypage></Mypage>}></Route>

                <Route path='/pay' element={<Pay></Pay>}/>
                <Route path='/success' element={<Success></Success>}/>

                <Route path='/datailTest' element={<DetailTest></DetailTest>}/>

            </Routes>

            {/* <ImgSlide></ImgSlide> */}
            <div className={'Mainbody'}>
                {/* <MainBody></MainBody> */}
                
            </div>

            <Footer></Footer>
        </div>
    );
}


export default App;