import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: {
        colour: "#1a1a17"
    },
    boards: []
}

const ImagesSlice = createSlice({
    name: "ImagesReducer",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const colour = action.payload
            state.theme.colour = colour
        },
        setBoardValues: (state, action) => {
            const boards = action.payload;
            state.boards = [...boards]
        }
    }
})


export const imagesReducer = ImagesSlice.reducer
export const { setTheme, setBoardValues } = ImagesSlice.actions 