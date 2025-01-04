import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const[count,setCount]=useState(0);
useEffect(()=>{
  try{
  const fetch=async()=>{
   const res= await axios.get("https://dummyapi.online/api/movies");
   console.log(res)
   console.log("fetch function start")
   console.log(res.status)
   console.log(res.data[0].movie)
  }
  fetch();
}catch(error){
  console.log(error.message)
}
},[])
  useEffect(()=>{
    console.log("counter value changed, so updated")
  },[count])
  return (
    <div>App

      <button onClick={()=>setCount(count+1)}>click to increment</button>
    </div>
  )
}

export default App;
