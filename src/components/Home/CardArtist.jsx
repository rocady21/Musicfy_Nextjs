import React from 'react'

export const CardArtist = () => {
  return (
    <div className='flex flex-col mx-[25px] '>
        <img className='h-[200px] w-[200px] rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_HqnZdEwR0Q0e_7veXg1OSXDS4LjIBBs0iXdI5JPrg&s" alt="" />
        <p className='font-bold mt-2 text-white'>Doblecero</p>
        <p className='text-gray-300 text-[14px]'>Artista</p>
    </div>
  )
}
