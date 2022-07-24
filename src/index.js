import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

let usersReducer = (state = [], action) => {
    switch (action.type) {
        case "Load_Users":
            return [...action.payload];

        case "Filter_Users":

            return [...state.filter(value => value[action.payload.fild] == action.payload.value)];
        default:
            return state;

    }

}

let postsReducer = (state = [], action) => {
    switch (action.type) {
        case "Load_Posts":
            return [...action.payload];
        default:
            return state;
    }
}

let userReducer = (state = null, action) => {
    switch (action.type) {
        case "Get_User":
            let users = action.payload.data;
            return users.find(user => user.id == action.payload.id)
        default:
            return state;
    }
}

let reducers = combineReducers({users: usersReducer, posts: postsReducer,user:userReducer});


let store = createStore(reducers);

// let store = createStore((state = {users: [], posts: [], user: null, post: null}, action) => {
//     // console.log(action);
//     // switch (action.type){
//     //     case "INC":
//     //         let newStateValue = state+action.payload;
//     //         return newStateValue;
//     //     case "DEC":
//     //         return state-action.payload;
//     //     case "RES":
//     //         return 0;
//     //     default:
//     //         return state
//     // }
//     switch (action.type) {
//         case "Load_Users":
//             return {...state, users: action.payload};
//         case "Load_Posts":
//             return {...state, posts: action.payload};
//         case "Get_User":
//             return {...state, user: state.users.find(value => value.id == action.payload)};
//         case "Get_Post":
//             return {...state, post: state.posts.find(value => value.id == action.payload)};
//         default:
//             return state;
//     }
//
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>

            </BrowserRouter>


        </Provider>


    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
