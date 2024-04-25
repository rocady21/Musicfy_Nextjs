"use client"
import React, { useEffect, useState } from 'react'
import { FaUserFriends } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { CardFriend } from './CardFriend';

export const Interactions = ({OpenOrCloseModal}) => {


  return (
    <div className='w-full h-[59%] bg-gray-100/10 rounded-[10px] p-5 '>
        <div className='tit flex flex-row justify-between'>
            <div className='flex flex-row items-center'>
                <FaUserFriends className='text-gray-300 mr-3' size={30}/>
                <p className='text-[20px] text-gray-400 font-bold'>Amigos</p>
            </div>
            <button onClick={()=> OpenOrCloseModal()}>
                <IoAddOutline className='text-gray-300' size={30}/>
            </button>
        </div>

        <div className='list_f my-5'>
            <CardFriend/>
        </div>
    </div>
  )
}
