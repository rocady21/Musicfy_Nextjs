"use client"
import React, { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import SvgSearch from "../../../../public/Search_undraw.svg"
import Error from "../../../../public/Error.svg"
import { SkeletonSearchUser } from '../skeletons/SkeletonSearchUser';
import { useUserSlice } from '@/redux/hooks/useUserSlice';
import { CardUserSearh } from '@/components/CardUserSearh';
import { BaseModal } from './BaseModal';


export const ModalSearchFriend = ({ CloseModal }) => {

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
    <BaseModal width={600} height={800} CloseModal={CloseModal}>

      <div className='input w-full mt-3 flex flex-row justify-around items-center focus:bg-gray-100/30 bg-gray-100/10 px-3 py-2  '>
        <input onChange={(e)=> {setValueSearch(e.target.value)}} className='w-full focus:outline-none  rounded px-3 py-2 bg-transparent' placeholder='Search' type="text" name="" id="" />
        <CiSearch size={25} color='white' />
      </div>
      <div className="w-full self-center h-full bg-red flex flex-row justify-center items-center">
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
    </BaseModal>
  )
}
