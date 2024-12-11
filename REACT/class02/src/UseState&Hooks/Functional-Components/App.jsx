import React from "react";

export default function App(){
    let [count,setcount]=React.useState(0);

    const increment=()=>{

        setcount(count+1)
    }

    return(
        <div>
            <h1>I'm a Counter</h1>
            <h1>Counter :{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
        
    )
}
