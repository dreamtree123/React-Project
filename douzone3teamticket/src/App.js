import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

// import CategoryMain from "./Category/CategoryMain";
import Concert from "./Category/Concert";
import Theater from "./Category/Theater";
import Classic from "./Category/Classic";

import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <Routes>
                <Route path='/' element={<MainBody></MainBody>}/>
                {/* <Route path='/concert' element={<CategoryMain/>}/> */}
                <Route path='/concert' element={<Concert/>}/>
                <Route path='/theater' element={<Theater/>}/>
                <Route path='/classic' element={<Classic/>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;
