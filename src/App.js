import React from 'react';
import './App.css';
import Header from './Components/Header'
import SignIn from './Components/SignIn'
import Content from './Components/Content'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      userObj: null
    }

    this.selectProfile = this.selectProfile.bind(this)
  }  

  render(){
    return (
      <div className="App wrapper">
        <Header isLoggedIn={this.state.isLoggedIn} userData={this.state.userObj}/>
        <SignIn isLoggedIn={this.state.isLoggedIn} selectUser={this.selectProfile}/>
        <Content isLoggedIn={this.state.isLoggedIn} userData={this.state.userObj}/>
      </div>
    );
  }

  selectProfile(userData){
    this.setState(
      {
        isLoggedIn:true,
        userObj: userData
      }
    )
  }
}

export default App;
