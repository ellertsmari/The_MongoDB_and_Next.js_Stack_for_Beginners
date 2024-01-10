'use client'
import { useEffect } from "react"

export default function Front() {
  useEffect(()=>{ 
    console.log("hello front end")
  })
  return (<h1>Some content</h1>)
}