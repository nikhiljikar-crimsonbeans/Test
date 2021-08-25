import React , { Component } from "react";
import firebase from "./components/firebase";

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    firebase.auth().signOut();
}
render()
{
    return(
        <div>
            <h1>You are logged in !!!</h1>
            <button onClick={this.logout}>Logout</button>
        </div>
    )
}
}
export default Home;


// import React, { Component } from 'react'
// class Home extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }

//     render() {
//         return (
//             <div>
//               <h1>you are logged in</h1> 
//               <button>Logout</button>
//             </div>
//         )
//     }
// }

// export default Home