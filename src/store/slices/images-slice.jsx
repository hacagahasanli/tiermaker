import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        colour: "#1a1a17"
    },
    modalVisibility: false,
    columnDetail: {}
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
            state.modalVisibility = isVisible
        },
        setColumnDetail: (state, action) => {
            const data = action.payload;
            state.columnDetail = data
        }
    }
})


export const imagesReducer = ImagesSlice.reducer
export const { setTheme, setModalVisible, setColumnDetail } = ImagesSlice.actions 