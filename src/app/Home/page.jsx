"use client"
import { Layout } from "../admin/layout"
import { Populate } from "@/components/Home/Populate"
import { Search } from "@/components/Home/Search"
import { Interactions } from "@/components/Home/Interactions"
import { useState } from "react"
import { ModalSearchFirend } from "@/components/Home/Modal/ModalSearchFirend"

export default function Home() {

  const [stateModal,setStateModal] = useState(false)

  const OpenOrCloseModal = () => {
    console.log("cerrar o abrir");
      setStateModal(!stateModal)
  }


  return (
    <Layout>
      <div className="relative w-full h-full flex flex-row">
          <div className="h-full w-2/3  p-3 pr-1 box-border z-10">
            <Populate/>
          </div>
          <div className="h-full w-1/3 flex box-border z-10 flex-col justify-between pl-3  p-3 fixed right-0">
            <Search/>
            <Interactions OpenOrCloseModal={()=> OpenOrCloseModal()} />
          </div>

          {
            stateModal === true && <ModalSearchFirend OpenOrCloseModal={OpenOrCloseModal} />
          }
      </div>
    </Layout>

  )
}
