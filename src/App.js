import React, { Component } from 'react';
import './App.css';
import firebase from './components/firebase';
import Login from './Login'
import Home from './Home'
// import GoogleAuth from './components/GoogleAuth'
import FireStorage from './components/FireStorage.js'
class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div className="App">
        {/* {this.state.user ? (<Home/>) : (<Login/>)} */}

        {/* <GoogleAuth /> */}
        <FireStorage />
      </div>
    );
  }
}

export default App;



// import React,{ Component } from 'react'
// import './App.css';
// import firebase from './components/firebase'
// import Login from './Login'
// import Home from './Home'

// class App extends React.Component {
//     constructor(props)
//     {
//       super(props);
//       this.state={
//         user: {}
//       }
//     }
//     componentDidMount(){
//       this.authListner();
//     }
//     authListner(){
//         firebase.auth().onAuthStateChanged((user)=>{
//           if(user)
//           {
//             this.setState({user})
//           }
//           else{
//             this.setState({user : null})
//           }
//         })
//     }
//   render(){ 
//    return(
//      <div><center>
//         {this.state.user ? (<Home />) : (<Login />)}
//         </center></div>
//    )}
// }

// export default App;
