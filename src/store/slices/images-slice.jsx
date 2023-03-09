import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
}

const ImagesSlice = createSlice({
    name: "ImagesReducer",
    initialState,
    reducers: {}
})


export const imagesReducer = ImagesSlice.reducer