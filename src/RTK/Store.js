import { configureStore } from "@reduxjs/toolkit";
import  QuranReducer  from "./Slices/Quran-slice";
export const Store = configureStore({
    reducer:{
        Quran: QuranReducer,
    }
})