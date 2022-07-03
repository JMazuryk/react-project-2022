import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../user/User";


export default function Users({clickPosts}) {
    let [users,setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(({data}) => setUsers([...data]));

    },[]);
    return (

        <div>
            {
                users.map(value => <User key={value.id}
                                         item={value}
                                         clickPosts={clickPosts}
                />)
            }
        </div>
    );
}