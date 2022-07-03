// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments


import {Comments, Users} from "./components";
import './App.css'

export default function App() {
    return (
        <div className={'form'}>
            <Users/>
            <Comments/>

        </div>
    );
}