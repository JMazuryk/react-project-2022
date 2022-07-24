import React from 'react';
import {useSelector} from "react-redux";

export default function PostsComponents(props) {

    let posts = useSelector(({posts}) => posts);

    return (
        <div>
            {
                posts.map(value => <div key={value.id}>{value.title}</div>)
            }
        </div>
    );
}