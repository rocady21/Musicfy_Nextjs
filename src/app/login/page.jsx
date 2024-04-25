"use client"
import Image from "next/image";
import SVGICon from "../../../public/undraw_happy_music_g6wc.svg"
import { useRouter, usePathname, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useUserSlice } from "@/redux/hooks/useUserSlice";
import { Layout } from "../admin/layout";

const Login = () => {
  const router = useRouter()
  const {LoginUser,is_session,ValidToken} = useUserSlice()
  const [stateLogin,setStateLogin] = useState({
    email:"",
    password:""
  })

  useEffect(()=> {
    valid_token()
  },[is_session])

  const valid_token = async()=> {
    const resp = await ValidToken()

    if(resp === true) {
      router.push("/Home")
    }
  }

  const handleForm = async(e)=> {
    e.preventDefault()
    if(stateLogin.email !== "" && stateLogin.password !== "") {
      const resp = await LoginUser(stateLogin)
    }
  }
  

  return <div className="w-full relative h-[100vh] flex flex-row justify-center items-center">
      <Image className="absolute bottom-0 left-0 z-1" src={SVGICon} alt="Happy Music" />
      <div className="bg-slate-800 shadow-2xl shadow-violet-700/30 min-w-[350px] px-[35px] py-[25px] flex flex-col items-center z-10 rounded">
        <h1 className="mb-5 text-[25px] font-bold">Iniciar Session</h1>
        <form className=" w-full flex flex-col items-center" onSubmit={handleForm} action="">
          <div className="relative my-2 w-full">
            <p className="font-mono bg-slate-800 p-[6px] pr-3 rounded-md absolute top-[-17px] left-[25px]">Email</p>
            <input onChange={(e)=> setStateLogin({...stateLogin,email:e.target.value})} className="w-full rounded active:bg-transparent bg-transparent border-[1px] border-white/30  px-4 py-3" placeholder="Email" type="email" name="email" id="email" />
          </div>
          <div className="relative w-full mt-[25px]">
            <p className="font-mono bg-slate-800 p-[6px] pr-3 rounded-md absolute top-[-17px] left-[25px]">Password</p>
            <input onChange={(e)=> setStateLogin({...stateLogin,password:e.target.value})} className="w-full rounded bg-transparent border-[1px] border-white/30  px-4 py-3" placeholder="password" type="password" name="email" id="email" />
          </div>
          <button className=" bg-violet-900 self-center my-[20px] rounded py-2 px-10 hover:bg-violet-800">Login</button>
        </form>
        <div className="w-full flex relative h-[2px] bg-white/20 my-3">
          <p className="absolute text-center top-[-20px] bg-slate-800 left-1/2 transform -translate-x-1/2 py-[5px] px-[25px] text-white/20 ">OR</p>
        </div>
        <div className="social_icons my-2 w-[50%] flex flex-row justify-around">
          <button className="bg-transparent border-[1px] p-3 border-white/20 rounded-full">
            <Image width={25} alt="google icon" height={25} src={"https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"} />
          </button>
          <button className="bg-transparent border-[1px] p-3 border-white/20 rounded-full">
            <Image color="white" alt="facebook icon" width={25} height={25} src={"https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-black-circle-white-png.png"} />
          </button>
        </div>


        <p className="my-2 text-[12px]">Todavia no tienes una cuenta? <span role="button" className="text-violet-500">Crear una</span> </p>
      </div>
    </div>
}

export default Login
