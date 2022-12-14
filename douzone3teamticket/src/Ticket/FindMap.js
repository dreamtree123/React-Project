import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";

const FindMap = (props) => {
    const address = props.address;
    const setAddress = props.setAddress;

    const onCompletePost = (data) => {
        console.log(data.address);
        setAddress(data.address);

    };

    const postCodeStyle = {

        display: "block",
        position: "absolute",
        top: "20%",
        width: "495px",
        height: "500px",
        padding: "0px",
        zIndex: 100,
        marginLeft:"-15px"
    };

    return (
        <>

            <DaumPostcode
                style={postCodeStyle}
                autoClose
                onComplete={onCompletePost}

            />

        </>
    );
};

export default FindMap;