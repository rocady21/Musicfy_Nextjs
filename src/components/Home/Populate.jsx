import React from 'react'
import { CardArtist } from './CardArtist'
import { CardPlaylist } from './CardPlaylist'

export const Populate = () => {
  return (
    <div className='w-full backdrop-blur-sm h-[100%] bg-gray-100/10 rounded-[10px] bg-gradient-to-t from-black via-neutral-900 to-neutral-800'>

        <div className='flex flex-col w-full py-[20px] px-[25px]'>
            <div className='w-full flex flex-row justify-between my-2'>
                <button>
                    <p className='text-gray-300 font-bold'>POPULAR ARTIST</p>
                </button>
                <button>
                    <p className='text-gray-300 font-bold '>SHOW MORE</p>
                </button>
            </div>
            <div className='Populate_artist flex flex-row w-full'>
                <CardArtist/>
            </div>
        </div>

        <div className='flex flex-col w-full py-[20px] px-[25px]'>
            <div className='w-full flex flex-row justify-between my-2'>
                <button>
                    <p className='text-gray-300 font-bold'>POPULAR PLAYLIST</p>
                </button>
                <button>
                    <p className='text-gray-300 font-bold '>SHOW MORE</p>
                </button>
            </div>
            <div className='Populate_artist flex flex-row w-full'>
                <CardPlaylist/>
            </div>
        </div>

    </div>
  )
}
