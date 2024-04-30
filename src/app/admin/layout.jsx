"use client"
import { useUserSlice } from "@/redux/hooks/useUserSlice"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const Layout = ({children})=> {

  const [data,setData] = useState()
  console.log("layout");
  const router = useRouter()
  const {ValidToken,is_session,validating_token} = useUserSlice()


  const valid_token = async()=> {
    const resp = await ValidToken()

    if(resp === false) {
      router.push("login")
    }
  }

  useEffect(()=> {
      console.log("jejejej");
      valid_token()

      
  },[data])



  return (
    <div className="w-full h-[100%] relative">
      {children}
    </div>
  )
}
