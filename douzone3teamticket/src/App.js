import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
<<<<<<< HEAD
import Concertdetailbody from "./PageDetailComponents/Concertdetailbody";
import Classicdetailbody from "./PageDetailComponents/Classicdetailbody";
import Footer from "./MainComponents/Footer";

import './App.css';
import {Route, Routes} from "react-router-dom";
=======
import Footer from "./MainComponents/Footer";
import Classic from "./DetailComponents/Classicdetailheader";
import Theater from "./DetailComponents/Theaterdetailheader";
import Concert from "./DetailComponents/Concertdetailheader";
import Musical from "./DetailComponents/Musicaldetailheader";

import './App.css';
>>>>>>> shinndrome

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
<<<<<<< HEAD
            
            <Routes>
                <Route path='/' element={<Classicdetailbody></Classicdetailbody>}/>
            </Routes>
=======

            {/* <ImgSlide></ImgSlide> */}
            <div className={'Mainbody'}>
                {/* <MainBody></MainBody> */}
                <Classic></Classic>
                
            </div>

>>>>>>> shinndrome
            <Footer></Footer>
        </div>
    );
}

<<<<<<< HEAD

export default App;
=======
export default App;
>>>>>>> shinndrome
