// Отримати всіх користувачів з jsonplaceholder, вивести їх.
//     Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси

import logo from './logo.svg';
import './App.css';
import Users from "./components/users/Users";
import {getUserPosts} from "./services";
import {useState} from "react";
import './App.css';
import Posts from "./components/posts/Posts";



export default function App() {

    let [posts, setPosts] = useState([]);
    const elevate = (id) => {
        getUserPosts(id).then(({data}) => {
            setPosts([...data]);
        })

    }

    return (<div className={'df'}>

        <div className={'left'}><Users elevate={elevate}/></div>
        <div className={'right'}>
            <Posts posts={posts}/>

        </div>

    </div>);
}