import {useParams} from "react-router-dom";
import PostDetailComponents from "../components/PostDetailComponents";



export default function PostDetailsPage() {
    let {postid} = useParams();
    
    return (
             <div>
            <PostDetailComponents/>
             </div>
    );
}