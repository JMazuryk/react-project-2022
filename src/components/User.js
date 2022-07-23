import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.item=this.props.item;
    }

    render() {
        return (
            <div>
                {this.item.id} {this.item.body}
            </div>
        );
    }
}

export default User;