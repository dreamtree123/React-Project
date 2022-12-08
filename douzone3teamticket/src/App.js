import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

import CategoryMain from "./Category/CategoryMain";

import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <Routes>
                <Route path='/' element={<MainBody></MainBody>}/>
                <Route path='/concert' element={<CategoryMain/>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}


export default App;
