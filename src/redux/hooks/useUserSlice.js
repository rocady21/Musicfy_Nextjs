import axios from "axios"
import { redirect } from "next/dist/server/api-utils"

const { useDispatch, useSelector } = require("react-redux")
const { onShowMessage, onLoginUser,onErrorSearch,onClearUsersSearch, onLogout,onValidating_token, onLoadingUsersSearch, onLoadUserSearch } = require("../features/userSlice")

export const useUserSlice = ()=> {

    
    const Dispatch = useDispatch()
    const {message,user,is_session,validating_token,users_search,loading_users_search} = useSelector(state => state.userSlice)

    const ShowMessage  = (key)=> {
        console.log("recibo la key");
        Dispatch(onShowMessage(key))
    }

    const LoginUser = async(data_form)=> {
        try {
            const {data} = await axios.post("http://127.0.0.1:8000/api/login",data_form)
            console.log("d",data);
            if(data.ok === true) {
                console.log("todo saliobien");
                localStorage.setItem("token",data.token)
                Dispatch(onLoginUser(data.user))
            }
        } catch (error) {
            console.log(error);
        }
    }

    const ValidToken = async()=> {
        Dispatch(onValidating_token(true))
        try {
            const token = localStorage.getItem("token")
            console.log(token);
            const {data} = await axios.get("http://127.0.0.1:8000/api/valid_token",{
                headers: {
                    'Authorization': `Token ${token}` // Adjunta el token al encabezado de autorización
                }
            })
            if(data.ok) {
                Dispatch(onLoginUser(data.data))
                Dispatch(onValidating_token(false))

                return true
                
            }
            
        } catch (error) {
            console.log("entro al catch");
            Logout()

            return false
        }
    }

    const Logout = ()=> {
        localStorage.removeItem("token")
        Dispatch(onLogout())
    }

    const Search_User = async(value_search)=> {
        Dispatch(onLoadingUsersSearch())
        try {
            const {data} = await axios.get("http://127.0.0.1:8000/api/users/" + value_search)

            if(data.ok) {
                Dispatch(onLoadUserSearch(data.users))
            }
        } catch (error) {
            Dispatch(onErrorSearch())
        }
    }

    const Clearusers = ()=> {
        Dispatch(onClearUsersSearch())
    }


    return {
        users_search,
        loading_users_search,
        user,
        validating_token,
        is_session,
        message,
        ShowMessage,
        LoginUser,
        ValidToken,
        Logout,
        Search_User,
        Clearusers
    }
}