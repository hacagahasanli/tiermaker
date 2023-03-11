import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        colour: "#1a1a17"
    },
    modalVisibility: false
}

const ImagesSlice = createSlice({
    name: "ImagesReducer",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const colour = action.payload
            state.theme.colour = colour
        },
        setModalVisible: (state, action) => {
            const isVisible = action.payload
            console.log(isVisible, "IS VISIBLE")
            state.modalVisibility = isVisible
        }
    }
})


export const imagesReducer = ImagesSlice.reducer
export const { setTheme, setModalVisible } = ImagesSlice.actions 