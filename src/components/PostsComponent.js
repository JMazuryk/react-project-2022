import {useEffect, useState} from "react";
import PostComponent from "./PostComponent";

export default function PostsComponent({id}) {

    let [posts,setPosts] = useState([]);
    useEffect(()=>{
        if (id){
            fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
                .then(value => value.json())
                .then(value => {
                    setPosts([...value]);
                    // console.log('if')
                    // console.log(value);
                });

        }else{
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                    setPosts([...value]);
                    // console.log('else');
                    // console.log(value);
                })
        }
    },[id]);

    return (
        <div>
            {
                posts.map(value => <PostComponent post={value} key={value.id}/>)
            }
        </div>
    );
}