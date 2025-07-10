import React ,{useEffect, useState} from "react"
import axios from 'axios'


function EffectTutorial (){
    const [data, setData] = useState("");
    const [count , setCount] = useState(0);

    useEffect(() => {
        // console.log("Hello World");
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            console.log(response.data);
            setData(response.data[0].email)
            console.log("API WAS CALLED");
            
        });
        
    },[count]);
    return <div>
        Hello World 
       <h1>{data}</h1> 
       <h1>{count}</h1>
       <button
       onClick={() => {
        setCount(count+1)
       }}
       >

       </button>
        </div>
        // new
}

export default EffectTutorial