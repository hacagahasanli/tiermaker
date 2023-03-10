import { createSlice } from "@reduxjs/toolkit";
import { defaultBoards } from "constants/index";

const initialState = {
    boards: [...defaultBoards],
    theme: {}
}

const ImagesSlice = createSlice({
    name: "ImagesReducer",
    initialState,
    reducers: {
        setBoards: (state, action) => {
            const boards = action.payload
            state.boards = [...boards]
        }
    }
})


export const imagesReducer = ImagesSlice.reducer
export const { setBoards } = ImagesSlice.actions 