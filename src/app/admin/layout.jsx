"use client"
import { useUserSlice } from "@/redux/hooks/useUserSlice"
import { redirect, useRouter } from "next/navigation"
import { useEffect } from "react"

export const Layout = ({children})=> {

  const router = useRouter()
  const {ValidToken,is_session,validating_token} = useUserSlice()

  useEffect(()=> {
      valid_token()
  },[])

  const valid_token = async()=> {
    const resp = await ValidToken()

    if(resp === false) {
      router.push("login")
    }
  }


  return (
    <div className="w-full h-[100%]">
      {children}
    </div>
  )
}
