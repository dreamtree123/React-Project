import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Concertdetailbody from "./PageDetailComponents/Concertdetailbody";
import Classicdetailbody from "./PageDetailComponents/Classicdetailbody";
import Footer from "./MainComponents/Footer";

import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            
            <Routes>
                <Route path='/' element={<Classicdetailbody></Classicdetailbody>}/>
            </Routes>
            <Footer></Footer>
        </div>
    );
}


export default App;