import {useEffect, useState} from "react";

import {getTodos} from "../../services";
import TodoComponents from "./TodoComponents";

export default function TodosComponents() {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(value => setTodos([...value]))
    }, []);

    return (
        <div>
            {
                todos.map(value => <TodoComponents item={value} key={value.id}/>)
            }
        </div>
    );
}