import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Category = () => {
    const[cat,setCat]=useState(null)
    useEffect(()=>{
        const categoryfetch=async()=>{
            try{
                const res=await axios.get('https://fakestoreapi.com/products/categories')
                console.log(res)
                setCat(res.data)
            }catch(error){
                console.log(error)
            }
        }
        categoryfetch()
    },[])
    if(!cat){
        return <p>loading..</p>
    }
    if(cat.length==0){
        return <p>no categories found</p>
    }
  return (
    <div>
        <h1>Category : </h1>
        {
            cat.map((item)=>{
                return <p>{item}</p>
            })
        }
    </div>
  )
}

export default Category;