import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerValues: {},
    loginValues: {}
}

const SignSlice = createSlice({
    name: "SignSlice",
    initialState,
    reducers: {
        registerUser: (payload) => payload,
        getLoginValues: (payload) => payload
    }
})

export const signReducer = SignSlice.reducer
export const { registerUser, loginUser } = SignSlice.actions