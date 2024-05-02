
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import friendSlice from "./features/friendSlice";

export const store = configureStore({
    reducer:{
        userSlice,
        friendSlice
    }
})