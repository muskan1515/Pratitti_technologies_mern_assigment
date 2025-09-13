import { createSlice } from '@reduxjs/toolkit'

interface initialState {
    open: boolean,
    selectedOption: number
}

const initialValue: initialState = {
    open: true,
    selectedOption: 0
}

const Sidebar = createSlice({
    name: "Sidebar",
    initialState: initialValue,
    reducers: {
        openSidebar: (state, action) => {
            state.open = true
        },
        closeSidebar: (state, action) => {
            state.open = false
        },
        updateSelectedOption: (state) => {
           
        }
    },
    selectors: {
        getInfo: (state) => state
    }
}
)

export const { openSidebar, closeSidebar, updateSelectedOption } = Sidebar.actions

export const { getInfo } = Sidebar.selectors

export default Sidebar