import React from 'react'
import { IoCloseOutline } from "react-icons/io5";

export const BaseModal = ({ children,width,height,CloseModal }) => {

    return (
        <div className={` absolute flex flex-col  px-5 py-3 inset-0 self-center justify-self-center w-[500px] h-[700px] bg-black rounded-lg z-30 `}>

            <div className="header flex flex-row justify-end">
                <button onClick={() => CloseModal()}>
                    <IoCloseOutline color='white' size={25} />
                </button>
            </div>
            {
                children
            }
        </div>
    )
}
