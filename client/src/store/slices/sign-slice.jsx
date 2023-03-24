import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registerValues: {},
    loginValues: {}
}

const SignSlice = createSlice({
    name: "SignSlice",
    initialState,
    reducers: {
        getRegisterValues: (payload) => payload,
        getLoginValues: (payload) => payload
    }
})

export const signReducer = SignSlice.reducer
export const { getRegisterValues, getLoginValues } = SignSlice.actions