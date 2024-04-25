import React from 'react'
import { LuUser2 } from "react-icons/lu";

export const SkeletonLoadInfoUser = () => {
    return (
        <div className='w-full h-[39%] bg-gray-100/10 rounded-[10px] p-5 flex flex-col'>
            <div className="w-full flex flex-row  items-center ">
                <div className='w-[75px] h-[75px] mr-3 bg-black rounded-full p-3 flex justify-center items-center animate-pulse'>
                    <LuUser2 className='text-white/80' size={45} />
                </div>
                <div className='w-[50%] bg-gray-400 p-3 animate-pulse'> </div>
            </div>
            <div className='w-full bg-white/10 p-5 animate-pulse rounded mt-5 text-[12px]'>
                <div className='font-bold bg-gray-400 animate-pulse p-3 text-[14px] w-[35%]'></div>

                <div className='animate-pulse bg-gray-400 mt-5 p-2 w-[40%] '> </div>

                <button className='mt-3 w-[100px] h-[25px] bg-white animate-pulse text-gray-900 font-bold rounded-full'></button>
            </div>
        </div>
    )
}
