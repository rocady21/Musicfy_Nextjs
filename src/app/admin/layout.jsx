"use client"

import { useUserSlice } from "@/redux/hooks/useUserSlice"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export const Layout = ({children})=> {

  const token = localStorage.getItem("token")
  const {ValidToken,is_session} = useUserSlice()

  useEffect(()=> {
    if(token !== "") {
      ValidToken()
    }
  },[])

  if(token === "") {
    return redirect("login")
  
  }

  return (
    <div className="w-full h-[100%]">
      {children}
    </div>
  )
}
