"use client"
import { useUserSlice } from '@/redux/hooks/useUserSlice';
import React, { useState } from 'react'
import { LuUser2 } from "react-icons/lu";
import { SkeletonLoadInfoUser } from './skeletons/SkeletonLoadInfoUser';
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { ModalFriend_request } from './Modal/ModalFriend_request';

export const Profile = () => {
  
  const [stateModal,setStateModal] = useState(false)

  const handleModal= ()=> {
    setStateModal(!stateModal)
  }

    const {user,validating_token,Logout} = useUserSlice()


  if(!user.name) {
    return <SkeletonLoadInfoUser/>   
  }

  return (
    <div className='w-full h-[39%] bg-gray-100/10 rounded-[10px] p-5 flex flex-col'>
            <div className="w-full flex flex-row justify-between  items-center ">
              <div className='flex flex-row items-center'>
                  <div className='w-[75px] h-[75px] mr-3 bg-black rounded-full p-3 flex justify-center items-center'>
                      <LuUser2 className='text-white/80' size={45}/>
                  </div>
                  <h1> {user.name + " " + user.last_name} </h1>
              </div>
 
              <div className='flex flex-row'>
                <button onClick={handleModal} className='w-[30px] h-[30px] relative flex flex-rowd'>
                  <LiaUserFriendsSolid className='justify-end' size={30} color='white' />
                  <div className='point bg-red-500 w-[10px] h-[10px] left-[-3px] rounded-full absolute top-0 '></div>
                </button>
                <button onClick={Logout} className='mx-5'>
                  <CiLogout size={30} color='white' />
                </button>
              </div>
            </div>
            <div className='w-full bg-white/10 p-5 rounded mt-5 text-[12px]'>
                <h2 className='font-bold text-[14px]'>Crea tu primera lista</h2>

                <p className='my-3'>Te echaremos una mano :D </p>

                <button className='mt-2 py-2 px-4 bg-white text-gray-900 font-bold rounded-full'>Crear Lista</button>
            </div>

            {
              stateModal === true && <ModalFriend_request CloseModal={handleModal} />
            }
    </div>
  )
}
