import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Pay() {
    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    function onClickPayment() {

        const {IMP} = window;
        IMP.init('imp02185252');

        const data = {
            // pg: 'html5_inicis',
            pg: 'kakaopay',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            amount: state.totalprice,
            name: '티켓'
        };

        IMP.request_pay(data, callback);
    }

    function callback(response) {
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;

        if (success) {
            let pur = JSON.parse(localStorage.getItem("buy") || "[]");
            pur.push({userid: localStorage.getItem('userId'), seatnum:[...state.selectseat],
            cate: localStorage.getItem('gocategory'), cateid: localStorage.getItem('performanceId')})

            console.log(pur);

            localStorage.setItem('buy', JSON.stringify(pur));

            alert('결제 성공');
            navigate('/success');
        } else {
            alert(`결제 실패: ${error_msg}`);
            window.location.href = '/seat';
        }
    }

    return (

        <div>
            {onClickPayment()}
        </div>

    );
}

export default Pay;