import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlicec"
export const store = configureStore({
    reducer: {
        counter:CounterSlice,
        
    }
})