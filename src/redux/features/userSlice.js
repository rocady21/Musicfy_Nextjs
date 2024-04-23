const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:{},
        message: "",
        is_session:false
    },
    reducers: {
        onLoginuser:(state,{payload})=> {

        },
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
        }
    }
})

export const {onLoginuser,onShowMessage,onLoginUser,onLogout} = userSlice.actions

export default userSlice.reducer