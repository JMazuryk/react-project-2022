import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
        this.item = this.props.item;
        this.id = 0;
    }

    componentDidMount() {
        console.log('mount');
        this.id = setInterval(() => {
            console.log('interval', this.item.id)
        }, 1000)
    }

    componentWillUnmount() {
        console.log('unmount');
        clearInterval(this.id);
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