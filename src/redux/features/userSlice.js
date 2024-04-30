const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{},
        users_search:[],
        //states : loading,data,error,no-data
        loading_users_search:"no-data",
        message: "",
        is_session:false,
        validating_token:false,
        request_friend:[],
        friends:[],
        status_request_friend:"no-data"
    },
    reducers: {
        onShowMessage:(state,{payload})=> {
            state.message = payload
        },
        onLoginUser:(state,{payload})=> {
            state.user = payload
            state.is_session = true
            state.validating_token = true

        },
        onLogout:(state,{payload})=>{
            state.user = {}
            state.is_session = false
        },
        onValidating_token:(state,{payload})=> {
            state.validating_token = payload
        },
        onLoadingUsersSearch:(state,{payload})=> {
            state.loading_users_search = "loading"
        },
        onLoadUserSearch:(state,{payload})=> {
            state.loading_users_search = "data"
            state.users_search = payload
        },
        onClearUsersSearch:(state,{payload})=> {
            state.loading_users_search = "no-data",
            state.users_search = []
        },
        onErrorSearch:(state,{payload})=> {
            state.loading_u,sers_search = "error"
        },
        onLoadingRequestFriend:(state)=> {
            state.status_request_friend = "loading"
        },
        onLoadRequestFriend:(state,{payload})=> {
            state.status_request_friend = "data"
            state.request_friend = payload
        },
        onNoRequestFriend:(state)=> {
            state.status_request_friend = "no-data"
        },
        onAddNewFriend:(state,{payload})=> {
            state.friends = [...state.friends,payload]

            state.request_friend = state.request_friend.filter((friend)=> (friend.id !== payload.id ))

            
        },
        onDeleteFriendRequest:(state,{payload})=> {
  
            state.request_friend = state.request_friend.filter((friend)=> (friend.id !== payload.id ))

            if(state.request_friend.length === 0) {
                state.status_request_friend = "no-data"
            }
        },
    }
})

export const {onShowMessage,onAddNewFriend,onDeleteFriendRequest,onLoginUser,onLogout,onValidating_token,onErrorSearch,onLoadingUsersSearch,onLoadUserSearch,onClearUsersSearch,onLoadRequestFriend,onNoRequestFriend,onLoadingRequestFriend} = userSlice.actions

export default userSlice.reducer