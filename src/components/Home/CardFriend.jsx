import React from 'react'
import { GiHeadphones } from "react-icons/gi";

export const CardFriend = () => {
  return (
    <div className='relative w-full bg-black/50 p-3 flex flex-row items-center rounded-md text-white'>
        <img className='w-[60px] h-[60px] rounded-full' src="https://wallpapers.com/images/hd/cute-anime-profile-pictures-0lifptfs0jd9fml3.jpg" alt="" />
        <div className='info ml-3'>
            <p className='font-bold mb-1 text-[18px]'>Rodrigo Olivera Silva</p>
            <div className='flex flex-row text-[14px] ml-[15px]'>
                <GiHeadphones className='mr-3' size={20} color='white' />
                <p>Listening to "Chill Beats"</p>
            </div>
        </div>
        <div className='bg-green-400 w-[10px] h-[10px] rounded-full absolute right-[20px]'></div>
    </div>
  )
}
