import React from 'react'
import { CiUser } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";

export const Search = () => {
  return (
    <div className='w-full h-[39%] bg-gray-100/10 rounded-[10px] p-5 flex flex-col'>
            <div className="w-full flex flex-row  items-center ">
                <div className='w-[75px] h-[75px] mr-3 bg-black rounded-full p-3 flex justify-center items-center'>
                    <LuUser2 className='text-white/80' size={45}/>
                </div>
                <h1>Rodrigo Olivera Silva</h1>
            </div>

            <div className='w-full bg-white/10 p-5 rounded mt-5 text-[12px]'>
                <h2 className='font-bold text-[14px]'>Crea tu primera lista</h2>

                <p className='my-3'>Te echaremos una mano :D </p>

                <button className='mt-2 py-2 px-4 bg-white text-gray-900 font-bold rounded-full'>Crear Lista</button>
            </div>
    </div>
  )
}
