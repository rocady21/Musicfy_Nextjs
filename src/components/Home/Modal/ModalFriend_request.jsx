"use client"
import React, { useEffect } from 'react'
import { BaseModal } from './BaseModal'
import { useUserSlice } from '@/redux/hooks/useUserSlice'

export const ModalFriend_request = ({CloseModal}) => {
    const {LoadFriendRequest,request_friend,status_request_friend,onAcceptFriendRequest,onRejectFriendRequest,user} = useUserSlice()

    useEffect(()=> {
        LoadFriendRequest()
    },[])

  return (
    <BaseModal width={500} height={500} CloseModal={CloseModal}>
        <div className='w-full h-full flex flex-col items-center p-5 '>
            {status_request_friend === "loading"? "Cargnado" : status_request_friend == "no-data"? "No data" : 
            request_friend.map((data,index)=> {
                return <div key={index} className='w-full flex flex-row items-center justify-between'>
                    <div className='w-[20%] flex flex-row items-center justify-center'>
                        <img src={data.photo} className='w-[75px] h-[75px] rounded-full' alt="" />
                    </div>
                    <div className="w-[50%] info flex flex-col ml-5">
                        <h1>Rodrigo Olivera </h1>
                        <p>Hace 5 minutos</p>
                    </div>
                    <div className='buttons w-[30%] h-full flex flex-col items-center'>
                        <button onClick={()=> onAcceptFriendRequest({id_from:data.id,id_to:user.id})} className='px-2 w-full py-2 mb-1 bg-green-300'>Aceptar</button>
                        <button onClickCapture={()=> onRejectFriendRequest({id_from:data.id,id_to:user.id})} className='px-2 w-full py-2 mt-1 bg-red-400'> Reachazar </button>
                    </div>
                </div>
            })
            }

        </div>
    </BaseModal>
  )
}
