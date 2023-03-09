import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: [],
}

const imagesReducer = createSlice({
    name: "ImagesReducer",
    initialState,
    reducers: {}
})


export default imagesReducer