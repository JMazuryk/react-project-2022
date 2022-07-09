import {useParams,Outlet} from "react-router-dom";

import PostsComponent from "../components/PostsComponent";

export default function PostsPage() {

    let {id} = useParams();

    console.log(id);


    return (
        <div>
            <PostsComponent id={id}/>

            <Outlet/>

        </div>
    );
}