import React from 'react'

export const CardPlaylist = () => {
  return (
    <button className='mx-[25px] p-2 flex flex-col rounded hover:bg-white/10'>
        <img className='h-[200px] w-[200px] object-none object-left rounded' src="https://i.ytimg.com/vi/X74VG1Xz4Ps/maxresdefault.jpg" alt="" />
        <p className='font-bold text-white my-2'>Bocku no Hero</p>
        <p className='font-bold text-gray-300'>Doblecero</p>
    </button>
  )
}
