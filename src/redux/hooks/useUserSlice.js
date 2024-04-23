import axios from "axios"

const { useDispatch, useSelector } = require("react-redux")
const { onShowMessage, onLoginUser, onLogout } = require("../features/userSlice")

export const useUserSlice = ()=> {

    
    const Dispatch = useDispatch()
    const {message,user,is_session} = useSelector(state => state.userSlice)

    console.log(message);
    const ShowMessage  = (key)=> {
        console.log("recibo la key");
        Dispatch(onShowMessage(key))
    }

    const LoginUser = async(data_form)=> {
        try {
            const {data} = await axios.post("http://127.0.0.1:8000/api/login",data_form)
            if(data.ok === true) {
                localStorage.setItem("token",data.token)
                Dispatch(onLoginUser(data.user))
            }
        } catch (error) {
            console.log(error);
        }
    }

    const ValidToken = async()=> {
        const token = localStorage.getItem("token")

        const {auth} = await axios.get("http://127.0.0.1:8000/api/valid_token",{
            headers: {
                'Authorization': `Token ${token}` // Adjunta el token al encabezado de autorización
            }
        })
        if(token) {

        } else {
            Logout()
        }
    }

    const Logout = ()=> {
        localStorage.removeItem("token")
        Dispatch(onLogout())
    }

    return {
        user,
        is_session,
        message,
        ShowMessage,
        LoginUser,
        ValidToken,
        Logout
    }
}