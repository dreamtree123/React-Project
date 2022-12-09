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
    return (
        <div className="App">
            <MainNav></MainNav>

            {/* <ImgSlide></ImgSlide> */}
            <div className={'Mainbody'}>
                {/* <MainBody></MainBody> */}
                <Classic></Classic>
                
            </div>

            <Footer></Footer>
        </div>
    );
}

export default App;
