import React from 'react'
import { useParams } from 'react-router-dom'

export default function ParametersHook() {
    const {id}= useParams()
  return (
    <div>ParametersHook, track id {id}</div>
  )
}
