import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div onMouseDown={this.handleClick}>
                <img src={this.props.data.picture.large} className="userAvatar" alt="user avatar" /><br />
                {this.getName(this.props.data)}
            </div>
        );
    }

    getName(index){
        let firstName = this.props.data.name.first.charAt(0).toUpperCase() + this.props.data.name.first.slice(1)
        let lastName = this.props.data.name.last.charAt(0).toUpperCase() + this.props.data.name.last.slice(1)
        return firstName + " " + lastName
    }

    handleClick = () => {
        this.props.selectUser(this.props.data)
    }
}

export default User;