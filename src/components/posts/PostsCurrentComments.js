import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPostCurrentComment} from "../../services";
import PostComponents from "./PostComponents";

export default function PostsCurrentComments() {

  const {postId} = useParams();

  const [posts,setPosts] = useState([]);

  useEffect(()=> {
      getPostCurrentComment(postId).then(value => setPosts([{...value}]))
  },[postId])

    return (
        <div>
            {
                posts.map(value => <PostComponents item={value} key={value.id}/>)
            }
        </div>
    );
}