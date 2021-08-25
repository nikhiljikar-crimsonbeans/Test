import React, { Component } from 'react'
import "firebase/auth";
import firebase, { auth, provider } from './firebase.js';
class GoogleAuth extends Component {
    constructor(props){
        super(props);
       this.state = {
           islogin: false,
           name:"",
           photo:"",
           mail:""
       }
    }

    onSubmit=()=>{
        // const provider= new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider) 
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    console.log(user);
    this.setState({
        islogin: true,
        name: user.displayName,
        photo: user.photoURL,
        mail: user.email
    })
  }).catch((error) => {
    console.log(error)
  });
    }

    render() {
        return (
            <div>
                {this.state.islogin === false ?
                <div>
                <button 
                type="submit" 
                onClick={this.onSubmit}
                >Google Signup</button>
             </div> 
             :
             <div>
                 <img src={this.state.photo} />
                 <h4>{this.state.name}</h4>
                 <h4>{this.state.mail}</h4>
             </div>
            }
            </div>
        )
    }
}

export default GoogleAuth