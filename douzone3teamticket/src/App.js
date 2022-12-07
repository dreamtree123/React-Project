import MainNav from "./MainComponents/MainNav";
import ImgSlide from "./MainComponents/ImgSlide";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";

import './App.css';

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <ImgSlide></ImgSlide>
            <div className={'Mainbody'}>
                <MainBody></MainBody>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default App;
