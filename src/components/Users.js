import React, {Component} from 'react';
import {UserApiService} from "../services/user.api.service";

class Users extends Component {

    state = {users: []}

    constructor(props) {
        super(props);
        this.userApiServices = new UserApiService();
        this.userApiServices.getUsers().then(value => this.setState({users: value}));
    }


    render() {
        return (
            <div>
                {this.state.users.map(value => <div>{value.title}</div>)}
            </div>);
    }
}

export default Users;