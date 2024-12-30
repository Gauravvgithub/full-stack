import React from 'react'
import A from './A'
import { createContext } from 'react'
export const Appcontext= createContext()
export const Provider=({children})=>{
  const message="hi there!"
  const marks=90
  return (
    <Appcontext.Provider value={{message,marks}}>
      {children}
    </Appcontext.Provider>
  )
}
const Context = () => {
   return (
    <Provider>
       <A/>
    </Provider> 
  )
}

export default Context