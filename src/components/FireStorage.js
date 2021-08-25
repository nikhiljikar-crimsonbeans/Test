import React, {useState} from "react";
import { storage } from "./firebase";
// import {render} from "react-dom";

const FireStorage =()=>{

    const [image, setImage] = useState(null);
    const  handleChange=(e)=>{
        var file= e.target.files[0];
        setImage(e.target.files[0])

    }

    const handleUpload =()=>{
        var images = storage.ref(`images/${image.name}`).put(image)
        // images.put(image);
        console.log(image);
        images.on(
            "state_changed",
                snapshot => {},
                error => {
                    console.log(error);
                },
                ()=>{
                    storage.ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(
                        url=>{console.log(url)}
                    )
                })
    }

   

    




    // const [image, setImage] = useState(null);

    // const handleChange = e =>{
    //     if (e.target.files[0]){
    //         setImage(e.target.files[0]);
    //     }
    // }

    // console.log("image:",image)

    // const handleUpload =()=>{
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //     uploadTask.on(
    //         "state_changed",
    //         snapshot => {},
    //         error => {
    //             console.log(error);
    //         },
    //         ()=>{
    //             storage.ref("images")
    //             .child(image.name)
    //             .getDownloadURL()
    //             .then(
    //                 url=>{console.log(url)}
    //             )
    //         }
    //     )
    // };
    

    return(
        <div>
            <br />
            <input type='file' accept='image/*' onChange={handleChange} />
            <button onClick={handleUpload}>upload</button>
        </div>
    )
}

export default FireStorage