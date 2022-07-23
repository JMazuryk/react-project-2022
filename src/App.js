import {useDispatch, useSelector} from "react-redux";

export default function App() {
    let state = useSelector(state=>state);
    let dispatch = useDispatch();
    console.log(state);
    return (
        <div>
            {state}
            <button onClick={()=>{
                dispatch ({type:"INC",payload:1});
            }}></button>
        </div>
    );
}