import {useDispatch, useSelector} from "react-redux";
import {Routes,Route,Link} from "react-router-dom";

import Home from "./Home";
import UsersComponents from "./UsersComponents";
import PostsComponents from "./PostsComponents";

export default function App() {
    // let state = useSelector(state=>state);
    // let dispatch = useDispatch();
    // console.log(state);

    return (
        <div>

            {/*{state}*/}
            {/*<button onClick={()=>{*/}
            {/*    dispatch ({type:"INC",payload:1});*/}
            {/*}}>INCrement</button>*/}

            {/*<button onClick={()=>{*/}
            {/*    dispatch ({type:"DEC",payload:1});*/}
            {/*}}>DECrement</button>*/}

            {/*<button onClick={()=>{*/}
            {/*    dispatch ({type:"RES"});*/}
            {/*}}>RESet</button>*/}

<ul>
    <li><Link to={'/'}>state home</Link></li>
    <li><Link to={'/users'}>users</Link></li>
    <li><Link to={'/posts'}>posts</Link></li>

</ul>

          <Routes>
              <Route path={''} element={<Home/>}/>
              <Route path={'users'} element={<UsersComponents/>}/>
              <Route path={'posts'} element={<PostsComponents/>}/>


          </Routes>


        </div>
    );
}