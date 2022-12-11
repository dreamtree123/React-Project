import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import '../css/etcCss.css'

function Login() {

    let navigate = useNavigate();

    let state = useSelector((state) => {
        return state;
    });

    return (

        <div className={'loginForm'}>
            <h1>Login</h1>
            <br/><br/><br/>

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className={"b"}>
                <button type="button" className="btn btn-dark" onClick={ ()=>{
                    let c = document.getElementById('floatingInput').value;
                    state.check = ['true', c];
                    navigate('/');
                }}>Login</button>
                <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/user/join'); }}>Join</button>
            </div>
        </div>
    );
}


export default Login;