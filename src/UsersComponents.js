import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function UsersComponents(props) {

    let {users,user} = useSelector(state => state);
    let dispatch = useDispatch();

    return (
        <div>
            {user?.email}

            {
                users.map(value => <div key={value.id}>{value.name}
                    <button onClick={() => {
                        dispatch({type: "Get_User", payload: {data:users,id:value.id}});
                    }}>Click</button>
                </div>)
            }

        </div>
    );
}

export default UsersComponents;