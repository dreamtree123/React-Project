import './App.css';
import {Route, Routes} from "react-router-dom";

import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";

import Concert from "./Category/Concert";
import Musical from "./Category/Musical";
import Theater from "./Category/Theater";
import Classic from "./Category/Classic";

import Concertdetailheader from "./DetailComponents/Concertdetailheader";
import Musicaldetailheader from "./DetailComponents/Musicaldetailheader";
import Theaterdetailheader from "./DetailComponents/Theaterdetailheader";
import Classicdetailheader from "./DetailComponents/Classicdetailheader";

import Footer from "./MainComponents/Footer";

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
                <Route path='/musical/detail/:id' element={<Musicaldetailheader></Musicaldetailheader>}/>
                <Route path='/theater/detail/:id' element={<Theaterdetailheader></Theaterdetailheader>}/>
                <Route path='/classic/detail/:id' element={<Classicdetailheader></Classicdetailheader>}/>

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