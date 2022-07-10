import {Link} from "react-router-dom";

export default function CommentComponents({item}) {
    return (
        <div>
            <h5>{item.id} - {item.name}</h5>
            <p>{item.body}</p>
            <span><Link to={item.postId.toString()}>Post for comment</Link></span>
        </div>
    );
}