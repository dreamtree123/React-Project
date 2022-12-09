import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

// import CategoryMain from "./Category/CategoryMain";
import Concert from "./Category/Concert";
import Theater from "./Category/Theater";

import './App.css';
import { Route, Routes } from "react-router-dom";
import Musical from "./Category/Musical";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <Routes>
                <Route path='/' element={<MainBody></MainBody>} />
                {/* <Route path='/concert' element={<CategoryMain/>}/> */}
                <Route path='/concert' element={<Concert />} />
                <Route path='/musical' element={<Musical />} />
                <Route path='/theater' element={<Theater />} />
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
