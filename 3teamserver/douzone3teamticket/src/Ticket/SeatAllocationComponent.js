import React from "react";
import SeatPicker from "react-seat-picker";
import store from "../store";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function SeatAllocationComponent() {

    let state = useSelector((state) => {
        return state;
    });

    let navigate = useNavigate();

    return (
        <div>


            <div style={{margin: "100px"}}>
                <SeatPicker
                    rows= {state.seatmap}
                    maxReservableSeats={4}
                    number
                    visible
                    selectedByDefault
                    tooltipProps={{multiline: true}}
                />
            </div>

            <div>

            </div>


        </div>
    );

}