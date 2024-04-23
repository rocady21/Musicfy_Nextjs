"use client"

import { redirect } from "next/navigation"
import { Layout } from "../admin/layout"
import { useUserSlice } from "@/redux/hooks/useUserSlice"
import { useEffect } from "react"
import { Populate } from "@/components/Home/Populate"
import { Search } from "@/components/Home/Search"
import { Interactions } from "@/components/Home/Interactions"

export default function Home() {

  const {message,ShowMessage} = useUserSlice()

  useEffect(()=> {
    ShowMessage("hOLA MUNDO ")
  },[])

  return (
    <Layout>
      <div className="relative w-full h-full flex flex-row">
          <div className="h-full w-2/3  p-3 pr-1 box-border">
            <Populate/>
          </div>
          <div className="h-full w-1/3 flex box-border flex-col justify-between pl-3  p-3 fixed right-0">
            <Search/>
            <Interactions/>
          </div>
      </div>
    </Layout>

  )
}
