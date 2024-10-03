import { useDispatch } from "react-redux";
import { leasenum, leasonnum } from "./redux/redux";


const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() =>{
                dispatch(leasenum())
            }}>+5</button>

            <button onClick={() =>{
                dispatch(leasonnum())
            }}>-5</button>
        </div>
    );
}

export default Btn;
