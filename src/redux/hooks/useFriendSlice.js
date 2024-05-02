import axios from "axios"

const { useDispatch, useSelector } = require("react-redux")
const {onLoadingFriends,onLoadFriends,onNoFriends} = require("../features/friendSlice")
export const useFriendSlice = ()=> { 
    
    const Dispatch = useDispatch()
    const {status_load_friends,friends} = useSelector(state => state.friendSlice)

    const LoadFriendsUser = async ()=> {
        Dispatch(onLoadingFriends())
        const token = localStorage.getItem("token")
        try {
            const {data} = await axios.get("http://127.0.0.1:8000/api/user/friends",{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })

            if(data.ok === true) {
                Dispatch(onLoadFriends(data.data))
            }
        } catch (error) {
            Dispatch(onNoFriends())
            console.log(error);
        }
    }


    return {
        status_load_friends,
        friends,
        LoadFriendsUser
    }
}