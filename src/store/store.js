import { configureStore } from "@reduxjs/toolkit";
import { davnasSlice } from "./davnaSlice/davnasSlice";



export const store = configureStore({
    reducer: {
        davnas: davnasSlice.reducer,
    },
})