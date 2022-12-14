import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import SeatAllocationComponent from "./SeatAllocationComponent";
import ZZZ from "./ZZZ";
import FindMap from "./FindMap";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function Seat() {

    let [show, setShow] = useState(false);
    let [useInfo, setUseInfo] = useState(false);
    let [faq, setFaq] = useState(false);

    let navigate = useNavigate();

    return (
        <div className="Seatmap">
            <SeatAllocationComponent />
            {/*<button type="button" className="btn btn-dark" onClick={() => setShow(true)}>공지사항</button>*/}

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Body>
                    <FindMap></FindMap>
                </Modal.Body>
            </Modal>
        </div>
    );
}