import React, { Component } from 'react';

class Header extends Component {

    render() {
        if(this.props.isLoggedIn){
            return (
                <div>
                    <div className="navbar right">
                        <div className="navbar-item">Search</div>
                        <div className="navbar-item">Notifications</div>
                        <div className="navbar-item">
                            <img src={this.props.userData.picture.thumbnail} alt="User Avatar" />
                        </div>
                    </div>
                    <div className="navbar">
                        <div className="logo-small navbar-item" >Fox-Flix</div>
                        <div className="navbar-item">Home</div>
                        <div className="navbar-item">TV Shows</div>
                        <div className="navbar-item">Movies</div>
                        <div className="navbar-item">Recently added</div>
                        <div className="navbar-item">My List</div>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="logo-large" >
                    Fox-Flix
                </div>
            )
        }
    }
}

export default Header;