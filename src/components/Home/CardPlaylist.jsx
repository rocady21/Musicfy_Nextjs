import React from 'react'

export const CardPlaylist = () => {
  return (
    <button className='mx-[25px] p-2 flex flex-col rounded hover:bg-white/10'>
        <img className='h-[200px] w-[200px]  rounded' src="https://www.shutterstock.com/shutterstock/photos/2085823726/display_1500/stock-photo-a-cute-and-very-tired-girl-drawn-in-anime-style-she-is-a-poet-thoughtfully-rubs-her-forehead-with-2085823726.jpg" alt="" />
        <p className='font-bold text-white y-2'>Bocku no Hero</p>
        <p className='font-bold text-gray-300'>Doblecero</p>
    </button>
  )
}
