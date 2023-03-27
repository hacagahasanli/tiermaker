import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
    name: "Loading",
    initialState: {
        isLoading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})

export const loadingReducer = LoadingSlice.reducer;
export const { setLoading } = LoadingSlice.actions