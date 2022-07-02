import {useEffect, useState} from "react";
import {getPosts} from "../../services";
import Post from "../post/Post";

export default function Posts(getPostId) {

    let [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts().then(({data}) => setPosts([...data]));
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(value => value.json())
        //     .then(value => {
        //         console.log(value);
        //     })

    }, []);
    return (
        <div>
            {
                posts.map(value => <Post item={value} key={value.id} getPostId={getPostId}/>)

            }
        </div>
    );
}