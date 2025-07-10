import React,{useState} from "react";


const StateTutorial = () => {
    // let counter =0;
    const [counter , setCounter] = useState(0);
    const Increment = () => {
    //    counter = counter+1; 
    //    console.log(counter);
    setCounter(counter +1);
       
    }
    return (
       <div>
        {counter}
        <buuton onClick={Increment}>Increment</buuton>
       </div>
    );
    
};

export default StateTutorial;