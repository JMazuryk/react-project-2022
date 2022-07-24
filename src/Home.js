import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

function Home(props) {
    let dispatch = useDispatch();

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then (value => value.json())
            .then(value => {
                dispatch({type:"Load_Users",payload:value});
            });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then (value => value.json())
            .then(value => {
                dispatch({type:"Load_Posts",payload:value});
            });

    },[])

// let state = useSelector(state => state);
//     console.log(state);

    return (
        <div>
            Load in progress...
        </div>
    );
}

export default Home;