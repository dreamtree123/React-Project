import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

import Concert from "./Category/Concert";
import Musical from "./Category/Musical";
import Theater from "./Category/Theater";
import Classic from "./Category/Classic";

import { Route, Routes } from "react-router-dom";

import './App.css';

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <Routes>
                <Route path='/' element={<MainBody></MainBody>} />
                <Route path='/concert' element={<Concert/>}/>
                <Route path='/musical' element={<Musical />} />
                <Route path='/theater' element={<Theater/>}/>
                <Route path='/classic' element={<Classic/>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
