import axios from "axios"
import { redirect } from "next/dist/server/api-utils"
import { useRouter } from "next/router"

const { useDispatch, useSelector } = require("react-redux")
const { onShowMessage, onLoginUser,onErrorSearch,onClearUsersSearch, onLogout,onValidating_token, onLoadingUsersSearch,onAddNewFriend,onDeleteFriendRequest, onLoadUserSearch,onLoadRequestFriend,onNoRequestFriend,onLoadingRequestFriend } = require("../features/userSlice")

export const useUserSlice = ()=> {
    
    const Dispatch = useDispatch()
    const {message,user,is_session,validating_token,users_search,loading_users_search,request_friend,status_request_friend,friends} = useSelector(state => state.userSlice)

    const ShowMessage  = (key)=> {
        console.log("recibo la key");
        Dispatch(onShowMessage(key))
    }

    const LoginUser = async(data_form)=> {
        try {
            const {data} = await axios.post("http://127.0.0.1:8000/api/login",data_form)
            console.log("d",data);
            if(data.ok === true) {
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

            const {data} = await axios.get("http://127.0.0.1:8000/api/valid_token",{
                headers: {
                    'Authorization': `Token ${token}` 
                }
            })
            if(data.ok) {
                Dispatch(onLoginUser(data.data))
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

    const LoadFriendRequest = async () => {
        Dispatch(onLoadingRequestFriend())
        try {
            const token = localStorage.getItem("token")
            
            const {data} = await axios.get("http://127.0.0.1:8000/api/user/friend_request",{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })

            if(data.ok === true) {
                Dispatch(onLoadRequestFriend(data.data))
            }
            
        } catch (error) {
            console.log(error);
            if(error.response.status === 400) {
                return Dispatch(onNoRequestFriend())
            }
        }
    }

    const onAcceptFriendRequest = async(info)=> {
        console.log("info",info);
        try {
            const {data} = await axios.put("http://127.0.0.1:8000/api/user/friend_request/accept",info)
            if(data.ok === true) {
                Dispatch(onAddNewFriend(data.new_friend))
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onRejectFriendRequest = async(info)=> {
        try {
            const {data} = await axios.delete("http://127.0.0.1:8000/api/user/friend_request/delete",info)
            if(data.ok === true) {
                Dispatch(onDeleteFriendRequest())
            }
        } catch (error) {
            console.log(error);
        }
    }


    return {
        request_friend,
        status_request_friend,
        users_search,
        loading_users_search,
        user,
        validating_token,
        is_session,
        message,
        friends,
        ShowMessage,
        LoginUser,
        ValidToken,
        Logout,
        Search_User,
        Clearusers,
        LoadFriendRequest,
        onAcceptFriendRequest,
        onRejectFriendRequest,
    }
}