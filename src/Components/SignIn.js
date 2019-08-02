import React, { Component } from 'react'
import UserList from './UserList'

class SignIn extends Component {
    
    render() {
        if(this.props.isLoggedIn){
            return null
        }else{
            return (
                <div className="absCenter flexCol wrapped textCentered">
                    <div className="extraMarginBot contentWidth largeText">
                        Who's Watching?
                    </div>
                    <UserList selectUser={this.props.selectUser}/>
                    <div className="horiCentered extraMarginTop border50 padded contentWidth mediumText pointer">
                        MANAGE PROFILES
                    </div>
                </div>
            )
        }
    }
}
export default SignIn;