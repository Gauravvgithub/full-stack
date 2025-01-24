import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/UserSlice'

export const store = configureStore({
    reducer:{
        user:userReducer
    }
})