"use client"
import { Layout } from "./admin/layout"
import { Populate } from "@/components/Home/Populate"
import { Profile } from "@/components/Home/Profile"
import { Interactions } from "@/components/Home/Interactions"
import { useEffect, useState } from "react"
import { useUserSlice } from "@/redux/hooks/useUserSlice"
import { Connection, SendMessageBackend } from "@/helpers/socket_io"
import { io } from "socket.io-client"
export default function Home() {

  const {Recibe_user_connected} = useUserSlice()
  const [skt,setskt] = useState("")
  useEffect(()=> {
    
    const socket = io("http://localhost:3000")

    
    socket.on("message",(data)=> {
      Recibe_user_connected(data)
    })


    return ()=> socket.disconnect();
  },[])

  console.log(skt);
  

  return (
    <Layout>
      <button onClick={()=> SendMessageBackend(skt,"holaaaaaaaaaaaaaaaaaaaa")}>Botonm</button>
      <div className="relative w-full h-full flex flex-row">
          <div className="h-full w-2/3  p-3 pr-1 box-border z-10">
            <Populate/>
          </div>
          <div className="h-full w-1/3 flex box-border z-10 flex-col justify-between p-3  ">
            <Profile />
            <Interactions />
          </div>
      </div>
    </Layout>

  )
}
