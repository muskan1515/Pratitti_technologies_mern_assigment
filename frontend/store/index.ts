import { configureStore } from "@reduxjs/toolkit";
import Sidebar from "./slice/sidebar";

const store = configureStore({
    reducer: {
        sidebar: Sidebar
    }
})

export default store