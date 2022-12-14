import {Link, useNavigate} from "react-router-dom";
import '../css/etcCss.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { func } from "prop-types";
// import { BsFillBasketFill } from "react-icons/bs"
// import { AiOutlineShoppingCart } from "react-icons/ai"

function Mypage(){

    let navigate = useNavigate();

    let state = useSelector((state) => {
        return state;
    });

    let [check, setCheck] = useState(0);

    return(

        <div className={"mypage"}>

            <div className={"mypage-header"}>
                {/* <p>마이페이지</p> */}
                <p>{state.userInfo.name}님의 마이페이지</p> <br/>
            </div>
            
            <div className={"mypagebody"}>

                <div className="card">
                    <div className="card-header"><p>Menu</p></div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" onClick={ ()=>{setCheck(0)} }>계정 관리</li>
                        <li className="list-group-item" onClick={ ()=>{setCheck(1)} }>예매 내역</li>
                        <li className="list-group-item" onClick={ ()=>{setCheck(2)} }>1:1 문의</li>
                    </ul>

                    {/* <button type="button" className="btn btn-dark" onClick={ ()=>{ navigate('/basket'); }}>구매 내역</button> */}
                    <button type="button" className="btn btn-dark logout" onClick={ ()=>{
                        localStorage.setItem('userId', '');
                        navigate('/');
                    }}>LogOut</button>
                </div>



                <div className={"tabct"}>
                    <TabContext check={check}/>
                </div>
            </div>

        </div>

    );
}

function TabContext({check}) {
    return (
        <div className={"tabct"}>
            {[<Profile/>,<Management/>,<Inquiry/>][check]}
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
            <img className={"profileImg"} src="https://paidion.org/img/base/icon_login.png"/>
            <h1 className={"profileTitle"}>Profile</h1>
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

    let state = useSelector((state) => {
        return state;
    });

    return(
        <div>
            {/* <BsFillBasketFill/> */}
            {/* <img src="https://e7.pngegg.com/pngimages/876/563/png-clipart-purchasing-computer-icons-purchase-order-bank-purchase-requisition-bank-blue-company.png" alt="구매내역"/> */}
            <img className={"profileImg"} src="https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_960_720.png"/>
            <h1 className={"profileTitle"}>Management</h1>
            <hr/><br/>
        </div>
    );
}

// function submitCancle() {
const submitCancle = () => {
    // let navigate = useNavigate()

    if (window.confirm("정말 취소하시겠습니까?")) {
        alert("메인으로 이동합니다.");
        // navigate(`/comment/id/등등 내가 원하는 주소`);
        // <Link to="/"></Link>
    } 

};

function Inquiry(){
    // let naviate = useNavigate()
    
    return(
        <div>
            {/* <img src="//ticketimage.interpark.com/TicketImage/Customer/img_Q.gif" alt="1:1문의하기 - 고객님이 문의하신 질문과 답변 내용을 확인하실 수 있습니다."/> */}
            <img className={"profileImg"} src="https://o.remove.bg/downloads/e7271376-087a-40dd-8d32-c26631c45ba1/images-removebg-preview.png"/>
            <h1 className={"profileTitle"}>Q n A</h1>
            <hr/><br/>
            
            <div className={"ask"}>
               {/* <table width="100%" border="0" cellspacing="0" cellpadding="0"> */}
               <table className={"askTable"}>

                {/* <colgroup>
                    <col width="160px"/>
                </colgroup> */}

                <tbody>
                    <tr className={"askTR"}>
                        <th>제목</th>
                        <td><input name="Title" type="text" className="txt-w565" maxlength="200"/></td>
                    </tr>

                    <tr className={"askTR"}>
                        <th>유형</th>
                        <td>
                            <span className="radiocheck" ><input name="RQKind" type="radio" value="QK001"/> 예매 문의</span>
                            <span className="radiocheck" ><input name="RQKind" type="radio" value="QK002"/> 결제/수수료</span>
                            <span className="radiocheck" ><input name="RQKind" type="radio" value="QK003"/> 취소/환불/발권</span>
                            <span className="radiocheck" ><input name="RQKind" type="radio" value="QK005"/> 할인 문의</span>
                            <span className="radiocheck" ><input name="RQKind" type="radio" value="QK006"/> 배송/반송 문의</span>
                            <span className="radiocheck" ><input name="RQKind" type="radio" value="QK009"/> 기타</span>
                        </td>
                    </tr>
                    
                    <tr className={"askTR"}> 
                        <th>내용</th>
                        <td>
                            <textarea name="Contents" className="w565"></textarea>
                        </td>
                    </tr>

                    <tr className={"askTR"}> 
                        <th>연락처</th>    
                        <td><input name="HpNo" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" className="gray-w60" maxlength="3"/> 
                        - <input name="HpNo" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" className="gray-w60" maxlength="4"/> 
                        - <input name="HpNo" type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" className="gray-w60" maxlength="4"/>
                        <input name="SmsYN" type="checkbox" className="txt11-txt" /> 
                        <span>답변완료시 문자로 알림 받기</span>
                        </td>
                    </tr>

                    <tr className={"askTR"}>
                        <th>E-mail</th>
                        <td>
                            <input name="Email1" type="text" className="gray-w70" />
                            @
                            <select name="EmailSelect" id="EmailSelect" 
                            >
                                <option value="NoSelect">선택하세요</option>
                                <option value="chol.com">chol.com</option>
                                <option value="dreamwiz.com">dreamwiz.com</option>
                                <option value="empal.com">empal.com</option>
                                <option value="freechal.com">freechal.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="hanafos.com">hanafos.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="hanmir.com">hanmir.com</option>
                                <option value="hotmail.com">hotmail.com</option>
                                <option value="korea.com">korea.com</option>
                                <option value="nate.com">nate.com</option>
                                <option value="naver.com">naver.com</option>
                                <option value="netian.com">netian.com</option>
                                <option value="paran.com">paran.com</option>
                                <option value="yahoo.com">yahoo.com</option>
                                <option value="yahoo.co.kr">yahoo.co.kr</option>
                                <option value="">직접입력</option>
                            </select>
                            <input name="EmailYN" type="checkbox" className="txt11-txt" value=""/> 
                            <span>답변내용 이메일로 받기</span>
                        </td>
                    </tr>

                </tbody>
                </table>

                <p className="askBottom">* 1:1 문의하기는 실시간 답변 어려우며, 문의가 많을 경우 답변에 시일이 소요될 수 있사오니 빠른 답변을 원하시면 전화[<span>1544-1555</span>]로 문의해 주시기 바랍니다.</p>
                <p className="askBottom">* 1:1 문의하기는 전화 상담이 진행되지 않사오니 전화 상담을 원하시면 <span>1544-1555</span>로 문의해 주시기 바랍니다.</p>
                
                <div className="askbtn" >
                    <button type="button" className="btn btn-dark" onClick={() => alert('글이 등록되었습니다.')}>등록</button>
                    {/* <button type="button" className="btn btn-dark" onClick={() => naviate('/')}>취소</button> */}
                    <button type="button" className="btn btn-dark" onClick={() => submitCancle()}>취소</button>
                    {/* <span><img src="//ticketimage.interpark.com/TicketImage/Customer/btn_write.gif" alt="등록" onClick={() => alert('글이 등록되었습니다.')}/></span> */}
                    {/* <span><img src="//ticketimage.interpark.com/TicketImage/Customer/btn_cancel.gif" alt="취소"/></span> */}
                </div>
                
                </div>
            </div>
    );
}

export default Mypage;