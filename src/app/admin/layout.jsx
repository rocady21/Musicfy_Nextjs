"use client"
import { useUserSlice } from "@/redux/hooks/useUserSlice"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const Layout = ({children})=> {

  const router = useRouter()
  const {ValidToken,is_session,validating_token,user} = useUserSlice()


  const valid_token = async()=> {
    const resp = await ValidToken()
    
    if(resp === false) {
      router.push("login")
    }
  }

  useEffect(()=> {
    valid_token()
  },[])

  useEffect(()=> {
    const token = localStorage.getItem("token")
    if(!token) {
      router.push("login")
    }

  },[is_session])

  return (
    <div className="w-full h-[100%] relative">
      {children}
    </div>
  )
}
