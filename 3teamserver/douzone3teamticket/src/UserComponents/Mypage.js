import {Route, Routes, useNavigate} from "react-router-dom";
import '../css/etcCss.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function Mypage(){

    let navigate = useNavigate();

    let state = useSelector((state) => {
        return state;
    });

    let [check, setCheck] = useState(0);

    return(
        <div className={"mypagebody"}>

            <div className="card">
                <div className="card-header">
                    Menu
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" onClick={ ()=>{setCheck(0)} }>계정관리</li>
                    <li className="list-group-item" onClick={ ()=>{setCheck(1)} }>예매정보관리</li>
                    <li className="list-group-item" onClick={ ()=>{setCheck(2)} }>문의하기</li>
                </ul>
                <button type="button" className="btn btn-dark logout" onClick={ ()=>{
                    localStorage.setItem('userId', '');
                    navigate('/');
                }}>LogOut</button>
                <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/basket'); }}>장바구니</button>
            </div>



            <div className={"tabct"}>
                <TabContext check={check}/>
            </div>
        </div>

    );
}

function TabContext({check}) {
    return (
        <div className={"tabct"}>
            {[<Profile/>,<Management/>, <Inquiry/>][check]}
        </div>

    );
}

function Profile(){

    let state = useSelector((state) => {
        return state;
    });

    let tf = true;
    let u = '';
    function whoislogin(){

        let n = state.userInfo
        let i;
        for(i = 0; i < n.length && tf == true; i++){
            // console.log(n[i].userid);
            console.log(n.length)
            if(n[i].userid == localStorage.getItem('userId')){
                u = n[i];
                break;
            }
        }
    }

    return(
        <div>
            <h1>Profile</h1>
            <hr/>
            <div>
                {whoislogin()}
                <table className={"profileTable"}>
                    <tr>
                        <td>아이디</td>
                        <td>{u.userid}</td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td>{u.name}</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>{u.email}</td>
                    </tr>
                </table>

            </div>

        </div>
    );
}

function Management(){
    return(
        <div>
            <h1>Management</h1>
            <hr/>
        </div>
    );
}

function Inquiry(){
    return(
        <div>
            <h1>Inquiry</h1>
            <hr/>
        </div>
    );
}

export default Mypage;

