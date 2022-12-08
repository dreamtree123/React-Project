import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <Routes>
                <Route path='/' element={<MainBody></MainBody>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}


export default App;
