import MainNav from "./MainComponents/MainNav";
import MainBody from "./MainComponents/MainBody";
import Footer from "./MainComponents/Footer";
import Login from "./UserComponents/Login";
import Join from "./UserComponents/Join";
import Pay from "./UserComponents/Pay";
import Success from "./UserComponents/Success";
import Mypage from "./UserComponents/Mypage";


import './App.css';
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <MainNav></MainNav>
            <Routes>
                <Route path='/' element={<MainBody></MainBody>}/>

                <Route path={'/user'}>
                    <Route path='login' element={<Login></Login>}/>
                    <Route path='join' element={<Join></Join>}/>
                </Route>

                <Route path='/mypage' element={<Mypage></Mypage>}></Route>

                <Route path='/pay' element={<Pay></Pay>}/>
                <Route path='/success' element={<Success></Success>}/>

            </Routes>
            <Footer></Footer>
        </div>
    );
}


export default App;
