import React, { Component } from 'react';
import User from './User'

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.populateUsers = this.populateUsers.bind(this)
    }
    
    render() {
        return (
            <div className="flexRow flexSpaced fitText linkStyles" >
                {this.state.users.map((item, index) => (
                    <User key={index} data={item} selectUser={this.props.selectUser}/>
                ))}
            </div>
        );
    }

    componentDidMount(){
        this.populateUsers()
    }

    populateUsers(){

        let fetchURL = "https://randomuser.me/api/?results=" + Math.ceil(Math.random() * 5)
        let newUserArray = []

        fetch(fetchURL)
            .then((result => {

                //console.log(result);
                if(result.status !== 200){
                    console.log("API problem");
                }

                result.json()
                    .then((data) => {
                        //console.log(data);

                        for(var i = 0; i < data.results.length; i++){
                            newUserArray.push(data.results[i])
                        }
                       
                        //console.log(data.results[0]);
                        

                        this.setState({
                            users: newUserArray
                        })
                    })
            }))

        
    }
}

export default UserList;