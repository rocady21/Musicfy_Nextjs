import React from 'react'
import { GiHeadphones } from 'react-icons/gi'

export const SkeletonListFriends = () => {
    return (
        <div className='w-full h-full'>
            <div className='relative my-5 w-full bg-gray-300 animate-pulse p-3 flex flex-row items-center rounded-md text-white'>
                <div className='w-[60px] h-[60px] bg-gray-400 animate-pulse rounded-full'></div>
                <div className='info ml-3 flex flex-col'>
                    <div className='w-[100px] h-[15px] bg-gray-400 animate-pulse'></div>
                    <div className='flex flex-row  ml-[15px] mt-2'>
                        <GiHeadphones className='mr-3' size={20} color='black' />
                        <div className='w-[150px] animate-pulse bg-gray-400'></div>
                    </div>
                </div>
                <div className='bg-gray-500 w-[10px] h-[10px] rounded-full animate-pulse absolute right-[20px]'></div>
            </div>
        </div>
    )
}
