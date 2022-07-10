import {useEffect, useState} from "react";

import {getComments} from "../../services";
import CommentComponents from "./CommentComponents";


export default function CommentsComponents() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, []);

    return (
        <div>
            {
                comments.map(value => <CommentComponents item={value} key={value.id}/>)
            }
        </div>
    );
}