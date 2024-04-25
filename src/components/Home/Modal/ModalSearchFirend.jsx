"use client"
import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiPlaylistFill } from "react-icons/pi";
import { GiMicrophone } from "react-icons/gi";
import Image from 'next/image';
import SvgSearch from "../../../../public/Search_undraw.svg"
import Error from "../../../../public/Error.svg"
import { SkeletonSearchUser } from '../skeletons/SkeletonSearchUser';
import { useUserSlice } from '@/redux/hooks/useUserSlice';
import { CardUserSearh } from '@/components/CardUserSearh';
export const ModalSearchFirend = ({ OpenOrCloseModal }) => {

  const {loading_users_search,users_search,Search_User,Clearusers} = useUserSlice()
  const [valueSearch, setValueSearch] = useState("")

  useEffect(()=> {
    if(valueSearch !== "") {
      if(loading_users_search === "data") {
        Clearusers()
      }
      Search_User(valueSearch)
    } else {
      Clearusers()
    }
  },[valueSearch])


  return (
    <div className='absolute flex flex-col px-5 py-3 inset-0 self-center justify-self-center w-[600px] min-h-[800px] bg-black rounded-lg z-30 '>
      <div className="header flex flex-row justify-end">
        <button onClick={() => OpenOrCloseModal()}>
          <IoCloseOutline color='white' size={25} />
        </button>
      </div>
      <div className='input w-full mt-3 flex flex-row justify-around items-center focus:bg-gray-100/30 bg-gray-100/10 px-3 py-2  '>
        <input onChange={(e)=> {setValueSearch(e.target.value)}} className='w-full focus:outline-none  rounded px-3 py-2 bg-transparent' placeholder='Search' type="text" name="" id="" />
        <CiSearch size={25} color='white' />
      </div>
      <div className="w-full h-[700px] self-center h-full bg-red flex flex-row justify-center items-center">
          {
            loading_users_search === "loading" ?
            <SkeletonSearchUser/>
            :
            loading_users_search === "no-data" ? 
            <Image className='' src={SvgSearch} width={200} height={250}/>
            :
            loading_users_search === "data" ? 
            <div className='w-full h-full flex flex-col px-2 py-5'>
              {users_search.map((user)=> {
                return <CardUserSearh data={user} />
              })}
            </div>
            :
            <Image className='' src={Error} width={200} height={250}/>
          }
          
      </div>
    </div>
  )
}
