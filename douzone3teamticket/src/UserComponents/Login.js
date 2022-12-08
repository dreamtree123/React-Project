import {useNavigate} from "react-router-dom";

function Login() {

    let navigate = useNavigate();

    return (

        <div className={'loginForm'}>
            <h1>Login</h1>
            <br/><br/><br/>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/'); }}>Login</button>
            <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/user/join'); }}>Join</button>
        </div>

    );
}

export default Login;