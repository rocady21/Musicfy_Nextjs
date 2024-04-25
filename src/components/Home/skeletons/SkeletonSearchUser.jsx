import React from 'react'

export const SkeletonSearchUser = () => {
  return (
    <div className='w-full h-full py-5 px-2'>
        <div className='my-[45px] flex flex-row w-full'>
            <div className="imgCont w-[15%] flex flex-row items-center justify-start">
                <div className='img w-[50px]  h-[50px] bg-gray-300 animate-pulse rounded-full'></div>
            </div>
            <div className='info w-[80%] flex flex-col justify-around '>
                <div className='p-2 w-full bg-gray-300 animate-pulse'></div>
                <div className='p-1 w-[30%] bg-gray-300 animate-pulse'></div>

            </div>
        </div>
        <div className='my-[45px] flex flex-row w-full'>
            <div className="imgCont w-[15%] flex flex-row items-center justify-start">
                <div className='img w-[50px]  h-[50px] bg-gray-300 animate-pulse rounded-full'></div>
            </div>
            <div className='info w-[80%] flex flex-col justify-around '>
                <div className='p-2 w-full bg-gray-300 animate-pulse'></div>
                <div className='p-1 w-[30%] bg-gray-300 animate-pulse'></div>

            </div>
        </div>
        <div className='my-[45px] flex flex-row w-full'>
            <div className="imgCont w-[15%] flex flex-row items-center justify-start">
                <div className='img w-[50px]  h-[50px] bg-gray-300 animate-pulse rounded-full'></div>
            </div>
            <div className='info w-[80%] flex flex-col justify-around '>
                <div className='p-2 w-full bg-gray-300 animate-pulse'></div>
                <div className='p-1 w-[30%] bg-gray-300 animate-pulse'></div>

            </div>
        </div>

        <div className='my-[45px] flex flex-row w-full'>
            <div className="imgCont w-[15%] flex flex-row items-center justify-start">
                <div className='img w-[50px]  h-[50px] bg-gray-300 animate-pulse rounded-full'></div>
            </div>
            <div className='info w-[80%] flex flex-col justify-around '>
                <div className='p-2 w-full bg-gray-300 animate-pulse'></div>
                <div className='p-1 w-[30%] bg-gray-300 animate-pulse'></div>

            </div>
        </div>
    </div>
  )
}
