import { useUserSlice } from '@/redux/hooks/useUserSlice'
import React from 'react'
import { IoAddOutline } from "react-icons/io5";


export const CardUserSearh = ({ data }) => {
    const {user} = useUserSlice()
    const is_me = user.id === data.id? true : false
    return (    
        <div className='my-[45px] flex flex-row items-center w-full'>
            <div className="imgCont w-[13%] flex flex-row items-center justify-start">
                <img className='w-[50px] h-[50px] rounded-full' src={data.photo? data.photo : "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"} alt="" />
            </div>
            <div className='info w-[80%] flex flex-col justify-around '>
                <button className='text-start text-gray-200 text-[18px] font-bold'> {is_me == true ? "Yo" : data.name + " " + data.last_name} </button>
                <p className='text-[12px]'>150 Amigos</p>
            </div>
            {
                is_me === false && 
                <IoAddOutline size={25} color='white'/>
            }
        </div>
    )
}
