import React, {Component} from 'react';

import {UserApiService} from "../services/user.api.service";
import User from "./User";

class Users extends Component {
     //usestate -> state
    state = {users: []}

    constructor(props) {
        console.log('constructor')
        super(props);
     }
//useEffect
componentDidMount() {
    console.log('componentDidMount')
    this.userApiServices = new UserApiService();
    this.userApiServices.getUsers().then(value => this.setState({users: value}));
}
//return -> render
    render() {
        console.log('render')
        return (
            <div>
                {this.state.users.map(value => <User key={value.id} item={value}></User>)}
            </div>);
    }
}

export default Users;