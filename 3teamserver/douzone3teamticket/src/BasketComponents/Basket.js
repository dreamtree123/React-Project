import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";

function Basket(){

    let state = useSelector((state) => state);

    let navigate = useNavigate();

    return(
        <div>

        </div>
    );
}

export default Basket;