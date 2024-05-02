"use client"
import React, { useEffect, useState } from 'react'
import { FaUserFriends } from "react-icons/fa";
import { IoAddOutline } from "react-icons/io5";
import { CardFriend } from './CardFriend';
import { ModalSearchFriend } from './Modal/ModalSearchFirend';
import { useFriendSlice } from '@/redux/hooks/useFriendSlice';
import { SkeletonListFriends } from './skeletons/SkeletonListFriends';

export const Interactions = () => {

    const [stateModal,setStateModal] = useState(false)
    const {LoadFriendsUser,status_load_friends,friends} = useFriendSlice()
    const handleModal = ()=> {
        setStateModal(!stateModal)
    }

    useEffect(()=> {
        LoadFriendsUser()
    },[])

  return (
    <div className='w-full h-[59%] bg-gray-100/10 rounded-[10px] p-5 '>
        <div className='tit flex flex-row justify-between'>
            <div className='flex flex-row items-center'>
                <FaUserFriends className='text-gray-300 mr-3' size={30}/>
                <p className='text-[20px] text-gray-400 font-bold'>Amigos</p>
            </div>
            <button onClick={handleModal}>
                <IoAddOutline className='text-gray-300' size={30}/>
            </button>
        </div>

        {
            status_load_friends === "no-data" ? 
            <p>No hay amigos</p>
            :
            status_load_friends === "data"?
            <div className='flex flex-col my-3'>
                {
                    friends.map((friend,index)=> {
                        return <CardFriend key={index} data={friend}/>
                    })
                }
            </div>
            : <SkeletonListFriends/>
        }

        {
            stateModal === true && <ModalSearchFriend  CloseModal={handleModal}/>
        }
    </div>
  )
}
