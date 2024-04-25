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
        validating_token:false
    },
    reducers: {
        onShowMessage:(state,{payload})=> {
            state.message = payload
        },
        onLoginUser:(state,{payload})=> {
            state.user = payload
            state.is_session = true

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
            state.loading_users_search = "error"
        }
    }
})

export const {onShowMessage,onLoginUser,onLogout,onValidating_token,onErrorSearch,onLoadingUsersSearch,onLoadUserSearch,onClearUsersSearch} = userSlice.actions

export default userSlice.reducer